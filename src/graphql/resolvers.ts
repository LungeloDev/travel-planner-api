import axios from 'axios';

export const resolvers = {
  Query: {
    // Resolver for city suggestions
    citySuggestions: async (_: any, { input }: { input: string }) => {
      const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search`, {
        params: {
          name: input,
          count: 5,
          language: 'en',
          format: 'json'
        }
      });

      return response.data.results?.map((city: any) => ({
        name: city.name,
        country: city.country,
        latitude: city.latitude,
        longitude: city.longitude
      })) || [];
    },

    // Resolver for weather forecast
    weatherForecast: async (_: any, { lat, lon }: { lat: number; lon: number }) => {
      const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude: lat,
          longitude: lon,
          daily: ['temperature_2m_max', 'precipitation_sum', 'windspeed_10m_max'],
          timezone: 'auto'
        }
      });

      const days = response.data.daily.time.map((_: string, i: number) => ({
        date: response.data.daily.time[i],
        temperature: response.data.daily.temperature_2m_max[i],
        wind: response.data.daily.windspeed_10m_max[i],
        precipitation: response.data.daily.precipitation_sum[i]
      }));

      return days;
    },

    // Resolver for activity suggestions
    activitySuggestions: async (_: any, { lat, lon }: { lat: number; lon: number }) => {
      const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude: lat,
          longitude: lon,
          daily: ['temperature_2m_max', 'precipitation_sum', 'windspeed_10m_max'],
          timezone: 'auto'
        }
      });

      const today = {
        temperature: response.data.daily.temperature_2m_max[0],
        wind: response.data.daily.windspeed_10m_max[0],
        precipitation: response.data.daily.precipitation_sum[0]
      };

      const scores = [
        {
          name: 'Skiing',
          score: today.temperature < 5 ? 8 : 2,
          reason: today.temperature < 5 ? 'Cold enough for skiing' : 'Too warm for skiing'
        },
        {
          name: 'Surfing',
          score: today.wind > 15 ? 9 : 4,
          reason: today.wind > 15 ? 'Strong wind for waves' : 'Calmer wind, not ideal for surfing'
        },
        {
          name: 'Indoor sightseeing',
          score: today.precipitation > 5 ? 9 : 4,
          reason: today.precipitation > 5 ? 'Rainy weather, better indoors' : 'Nice enough for outdoor activities'
        },
        {
          name: 'Outdoor sightseeing',
          score: today.precipitation < 2 && today.temperature > 15 ? 9 : 3,
          reason: today.precipitation < 2 && today.temperature > 15 ? 'Great outdoor weather' : 'Not ideal for outdoor sightseeing'
        }
      ];

      return scores.sort((a, b) => b.score - a.score);
    },

    // Bonus resolver for average forecast per number of days 
    averageForecast: async (_: any, { lat, lon, days }: { lat: number; lon: number; days: number }) => {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
            latitude: lat,
            longitude: lon,
            daily: ['temperature_2m_max', 'precipitation_sum', 'windspeed_10m_max'],
            timezone: 'auto'
            }
        });

        const temps = response.data.daily.temperature_2m_max.slice(0, days);
        const rain = response.data.daily.precipitation_sum.slice(0, days);
        const wind = response.data.daily.windspeed_10m_max.slice(0, days);

        const average = (arr: number[]) =>
            arr.reduce((acc, val) => acc + val, 0) / arr.length;

        return {
            avgTemp: parseFloat(average(temps).toFixed(2)),
            avgPrecip: parseFloat(average(rain).toFixed(2)),
            avgWind: parseFloat(average(wind).toFixed(2))
        };
    }

  }
};

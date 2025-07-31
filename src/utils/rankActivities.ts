export function rankActivities(weather: { temperature: number; wind: number; precipitation: number }) {
  const { temperature, wind, precipitation } = weather;

  const scores = [
    {
      name: 'Skiing',
      score: temperature < 5 ? 8 : 2,
      reason: temperature < 5 ? 'Cold enough for skiing' : 'Too warm for skiing'
    },
    {
      name: 'Surfing',
      score: wind > 15 ? 9 : 4,
      reason: wind > 15 ? 'Strong wind for waves' : 'Calmer wind, not ideal for surfing'
    },
    {
      name: 'Indoor sightseeing',
      score: precipitation > 5 ? 9 : 4,
      reason: precipitation > 5 ? 'Rainy weather, better indoors' : 'Nice enough for outdoor activities'
    },
    {
      name: 'Outdoor sightseeing',
      score: precipitation < 2 && temperature > 15 ? 9 : 3,
      reason: precipitation < 2 && temperature > 15 ? 'Great outdoor weather' : 'Not ideal for outdoor sightseeing'
    }
  ];

  return scores.sort((a, b) => b.score - a.score);
}
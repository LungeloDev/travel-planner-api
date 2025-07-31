const { gql } = require('apollo-server');

export const typeDefs = gql`
  type Query {
    citySuggestions(input: String!): [City!]!
    weatherForecast(lat: Float!, lon: Float!): [Forecast!]!
    activitySuggestions(lat: Float!, lon: Float!): [ActivitySuggestion!]!
    averageForecast(lat: Float!, lon: Float!, days: Int!): ForecastAverage!
  }

  type City {
    name: String
    country: String
    latitude: Float
    longitude: Float
  }

  type Forecast {
    date: String
    temperature: Float
    wind: Float
    precipitation: Float
  }

  type ActivitySuggestion {
    name: String
    score: Float
    reason: String
  }

  type ForecastAverage {
    avgTemp: Float
    avgPrecip: Float
    avgWind: Float
  }
`;


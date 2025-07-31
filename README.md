# 🌍 Travel Planner GraphQL API

A GraphQL backend built with Node.js and Apollo Server for a travel planning app.  
It provides city suggestions, weather forecasts, and activity recommendations using Open-Meteo’s APIs.

---

## ⚙️ Tech Stack

- Node.js
- TypeScript
- GraphQL (Apollo Server)
- Axios
- Jest & Supertest

---

## 🔧 Setup Instructions

1. **Clone the repo**  
   ```bash
   git clone https://github.com/LungeloDev/travel-planner-api.git
   cd travel-planner-api
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the server**  
   ```bash
   npm run dev
   ```

4. Open in browser:  
   `http://localhost:4000/` (Apollo GraphQL Playground)

---

## 🚀 API Overview

### `citySuggestions(input: String!): [City!]!`
Returns dynamic city suggestions using Open-Meteo's geocoding API.

### `weatherForecast(lat: Float!, lon: Float!): [Forecast!]!`
Returns weather forecast for the next 7 days based on latitude and longitude.

### `activitySuggestions(lat: Float!, lon: Float!): [ActivitySuggestion!]!`
Ranks activities (Skiing, Surfing, Indoor/Outdoor sightseeing) based on today’s forecast.

### `averageForecast(lat: Float!, lon: Float!, days: Int!): ForecastAverage!`
Returns average temp, wind, and precipitation for a custom range of days.

---

## 🧪 Testing

To run tests:
```bash
npm test
```

Includes:
- ✅ Unit tests for average calculation and activity ranking
- ✅ GraphQL integration tests using Supertest

---

## 📂 Project Structure

```
src/
  graphql/
    schema.ts          # GraphQL types
    resolvers.ts       # Field resolvers
  utils/
    calculateAverage.ts
    rankActivities.ts
  index.ts             # Entry File
tests/
  integration-tests/
    graphql.test.ts
  unit-tests
    calculateAverage.test.ts
    rankActivities.test.ts
```

---

## ✨ Bonus Features

- ✅ `averageForecast` multi-day aggregation
- ✅ GraphQL integration tests with live API calls
- ✅ Clean resolver separation & utility functions for unit testing

---

## 🤖 AI Usage

Used ChatGPT for:
- Structuring the project plan
- Bug Fixes to avoid troubleshooting long hours

Final code decisions, API logic, and architecture were crafted and reviewed manually.

---

## 🚧 Future Improvements

- Add caching for repeated weather/city queries
- Support historical weather or seasonal trends
- Add user-auth for personalized planning
- Deploy to Vercel, Railway, or Render

---

## 🧠 Author

Lungelo Mpanza – [lungelo.dev](https://lungelo.dev)
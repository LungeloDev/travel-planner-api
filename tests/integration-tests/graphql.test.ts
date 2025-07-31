const request = require('supertest');
import { server } from '../../src/index'; // Import the server instance

describe('GraphQL API', () => {
  let url: string;

  beforeAll(async () => {
    const { url: runningUrl } = await server.listen({ port: 0 }); // start on random port
    url = runningUrl;
  });

  afterAll(async () => {
    await server.stop();
  });

  it('should return city suggestions', async () => {
    const response = await request(url)
      .post('/')
      .send({
        query: `
          query {
            citySuggestions(input: "Lon") {
              name
              country
            }
          }
        `
      });

    expect(response.status).toBe(200);
    expect(response.body.data.citySuggestions.length).toBeGreaterThan(0);
    expect(response.body.data.citySuggestions[0]).toHaveProperty('name');
  });

  it('should return weather forecast', async () => {
    const response = await request(url)
      .post('/')
      .send({
        query: `
          query {
            weatherForecast(lat: 51.5072, lon: -0.1276) {
              date
              temperature
            }
          }
        `
      });

    expect(response.status).toBe(200);
    expect(response.body.data.weatherForecast.length).toBeGreaterThan(0);
  });
});

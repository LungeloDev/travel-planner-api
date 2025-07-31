import { rankActivities } from '../../src/utils/rankActivities';

describe('rankActivities', () => {
  it('ranks indoor sightseeing higher on rainy day', () => {
    const result = rankActivities({ temperature: 18, wind: 10, precipitation: 6 });
    expect(result[0].name).toBe('Indoor sightseeing');
  });

  it('ranks skiing highest on a cold day', () => {
    const result = rankActivities({ temperature: -3, wind: 5, precipitation: 1 });
    expect(result[0].name).toBe('Skiing');
  });

  it('ranks outdoor sightseeing highest on a sunny day', () => {
    const result = rankActivities({ temperature: 24, wind: 5, precipitation: 0 });
    expect(result[0].name).toBe('Outdoor sightseeing');
  });
});

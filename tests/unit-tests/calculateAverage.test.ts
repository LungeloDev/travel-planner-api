import { calculateAverage } from '../../src/utils/calculateAverage';

describe('calculateAverage', () => {
  it('calculates the average correctly', () => {
    const result = calculateAverage([10, 20, 30]);
    expect(result).toBe(20.0);
  });

  it('handles empty arrays', () => {
    const result = calculateAverage([]);
    expect(result).toBe(0);
  });

  it('rounds to 2 decimal places', () => {
    const result = calculateAverage([1, 2, 3]);
    expect(result).toBe(2.0);
  });
});

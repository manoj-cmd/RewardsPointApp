import { calculateRewards } from '../utils/rewardUtils';

describe('calculateRewards', () => {
  test('returns 0 for amounts <= 50', () => {
    expect(calculateRewards(50)).toBe(0);
    expect(calculateRewards(30)).toBe(0);
  });

  test('returns correct points for amounts between 51 and 100', () => {
    expect(calculateRewards(51)).toBe(1);
    expect(calculateRewards(70)).toBe(20);
    expect(calculateRewards(100)).toBe(50);
  });

  test('returns correct points for amounts over 100', () => {
    expect(calculateRewards(120)).toBe(90); // 2*20 + 1*50
    expect(calculateRewards(200)).toBe(250); // 2*100 + 50
  });

  test('handles nullish and NaN input defensively', () => {
    expect(calculateRewards(null)).toBe(0);
    expect(calculateRewards(undefined)).toBe(0);
    expect(calculateRewards(NaN)).toBe(0);
  });

  test('handles 0 and negative amounts defensively', () => {
    expect(calculateRewards(0)).toBe(0);
    expect(calculateRewards(-50)).toBe(0);
  });
});

import { healthStatus } from './healthChecker';

test('returns healthy for health greater than 50', () => {
  expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  expect(healthStatus({ name: 'Воин', health: 51 })).toBe('healthy');
});

test('returns wounded for health between 50 and 15 inclusive', () => {
  expect(healthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
  expect(healthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
  expect(healthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('returns critical for health less than 15', () => {
  expect(healthStatus({ name: 'Маг', health: 14 })).toBe('critical');
  expect(healthStatus({ name: 'Маг', health: 1 })).toBe('critical');
  expect(healthStatus({ name: 'Маг', health: 0 })).toBe('critical');
});

import { moveRover } from './index';

test('moveRover should return "00N"', () => {
  const result = moveRover('someTestData'); // Pass relevant test data here
  expect(result).toBe('00N');
});
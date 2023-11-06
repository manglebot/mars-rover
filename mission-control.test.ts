import { moveRover } from './mission-control';
import { createMap } from './src/map';



createMap(5, 5);

test('moveRover should return "00N"', () => {
  const result = moveRover('someTestData'); // Pass relevant test data here
  expect(result).toBe('00N');
});
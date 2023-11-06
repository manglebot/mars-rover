import { moveRover } from './mission-control';

test('moveRover should return "00N"', () => {
  const result = moveRover('66'); // Pass relevant test data here
  expect(result).toBe('00N');
});

// This is my guess at what I will need in a bit. Small steps first!
// 
// test('set Grid size, initial location and movement data', () => {
//   const moveRoverInstructions = [
//     { plateauSize: 55,
//       initialPosition: '12N',
//       moveData: 'LMLMLMLMM' },
//   ];
//   expect(moveRover(moveRoverInstructions)).toBe('1 3 N');
// });
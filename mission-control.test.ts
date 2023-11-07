import { moveRover } from './mission-control';

test('moveRover should return "13N"', () => {
  const result = moveRover('55', '12N', 'LMLMLMLMM'); // Set map size
  expect(result).toBe('13N');
});

test('moveRover should return "13N"', () => {
  const result = moveRover('55', '33E', 'MMRMMRMRRM'); // Set map size
  expect(result).toBe('51E');
});




// Example Test Case

// Lines of Input to the Program:
// 5 5 - map size

// 1 2 N - rover 1 start

// LMLMLMLMM - move instructions

// 3 3 E - rover 2 start

// MMRMMRMRRM - move instructions

// Expected Output: 
// 1 3 N - rover 1 end

// 5 1 E- rover 2 end
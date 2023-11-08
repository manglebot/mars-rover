import { operationGo } from './mission-control';
import { ErrorMessages, ErrorHandler, isError, throwError } from "./src/errorHandler";
import { moveVehicle } from './src/move-vehicle';

test('operationGo (no vehicle move data supplied. stay still) should return "12N 33E"', () => {
  const result = operationGo([5,5],[1,2,'N'],'',[3,3,'E'],'');
  expect(result).toBe('12N 33E');
});
test('operationGo should return "13N 51E"', () => {
  const result = operationGo([5,5],[1,2,'N'],'LMLMLMLMM',[3,3,'E'],'MMRMMRMRRM');
  expect(result).toBe('13N 51E');
});

test('operationGo test for co-ordinates with large numbers', () => {
  const result = operationGo([50,50],[10,20,'N'],'LMLMLMLMM',[30,30,'E'],'MMRMMRMRRM');
  expect(result).toBe('1021N 3228E');
});

test('rover 1 should trigger the Out of Bounds error', () => {
 try {
  operationGo([5,5],[1,2,'N'],'MMMMMMMMM',[1,2,'E'],'RR');
  fail('Expected an error to be thrown');
 } catch (error) {
  expect(error).toEqual({"message": "Sorry, this move is not possible. Out of bounds"});
}
});

test('rover 2 should trigger the Out of Bounds error', () => {
  try {
   operationGo([5,5],[1,2,'N'],'M',[1,2,'E'],'MMMMMMMMMMMMMMMMM');
   fail('Expected an error to be thrown');
  } catch (error) {
   expect(error).toEqual({"message": "Sorry, this move is not possible. Out of bounds"});
 }
 });
 

// test('operationGo should throw error - not "12S 12E"', () => {
//   const result = operationGo([5,5],[1,2,'N'],'MMMMMMMMMMLLLLLL',[1,2,'E'],'RRRRRRRRR');
//   // expect(result).toBe('12S 12S');
//   expect(result).toThrow(ErrorMessages.OutOfBounds);
// });




// test('Return out of bounds error', () => {
//   const result = operationGo([2,2],[10,20,'N'],'LMLMLMLMM',[30,30,'E'],'MMRMMRMRRM'); // Set map size
//   expect(result).toBe('Sorry, this move is not possible. Out of bounds');
// });

// test('test for large map', () => {
//   const result = operationGo([50,50],'12N','LMLMLMLMM','33E','MMRMMRMRRM'); // Set map size
//   expect(result).toBe('13N 51E');
// });



// [1,2,'N']
// (string | number)[]



// test('moveRover will crash error', () => {
//   const result = operationGo('55', '12N', 'LMLMLMLMM', '12N', 'LMLMLMLMM'); // Set map size
//   expect(result).toBe('13N 13N');
// });





// test('moveRover should return "51E"', () => {
//   const result = operationGo('55', '33E', 'MMRMMRMRRM'); // Set map size
//   expect(result).toBe('51E');
// });




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

// 1 1

// 1 2 N

// LMRLMRLMRLMRL

// 3 4 E

// LMRLMRLMMMM

// toExpect([0,0],[0,1],[0,2])
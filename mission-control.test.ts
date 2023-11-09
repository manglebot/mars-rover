import { operationGo } from './mission-control';
// import { ErrorMessages, ErrorHandler, isError, throwError } from "./src/errorHandler";
// import { moveVehicle } from './src/move-vehicle';

test('operationGo should return "13N 51E"', () => {
  const result = operationGo([5,5],[1,2,'N'],'LMLMLMLMM',[3,3,'E'],'MMRMMRMRRM');
  expect(result).toBe('1,3,N 5,1,E');
});

test('operationGo test for co-ordinates with large numbers', () => {
  const result = operationGo([50,50],[10,20,'N'],'LMLMLMLMM',[30,30,'E'],'MMRMMRMRRM');
  expect(result).toBe('10,21,N 32,28,E');
});

test('operationGo should return "13N 43E"', () => {
  const result = operationGo([5,5],[1,2,'N'],'LRLRM',[3,3,'E'],'MLRLRLRLRLR');
  expect(result).toBe('1,3,N 4,3,E');
});
 
test('operationGo (no vehicle move data supplied. stay still) should return "12N 33E"', () => {
  const result = operationGo([5,5],[1,2,'N'],'',[3,3,'E'],'');
  expect(result).toBe('1,2,N 3,3,E');
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
   operationGo([5,5],[1,2,'N'],'MM',[1,2,'E'],'RRMMMMMMMMM');
   fail('Expected an error to be thrown');
  } catch (error) {
   expect(error).toEqual({"message": "Sorry, this move is not possible. Out of bounds"});
 }
 });

test('rover 2 should trigger the Collision error', () => {
  try {
  operationGo([5,5],[1,2,'N'],'LMLMLMLMM',[1,2,'N'],'LMLMLMLMM');
  fail('Expected an error to be thrown');
  } catch (error) {
   expect(error).toEqual({"message": "Sorry, this move is not possible. Vehicles will collide"});
 }
 });

 test('rover 2 should trigger the Collision error, even on large map', () => {
  try {
  operationGo([500,500],[100,200,'N'],'LMLMLMLMM',[100,200,'N'],'LMLMLMLMM');
  fail('Expected an error to be thrown');
  } catch (error) {
   expect(error).toEqual({"message": "Sorry, this move is not possible. Vehicles will collide"});
 }
 });


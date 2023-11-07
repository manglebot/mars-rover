// import { missionControl } from './src/mission-control';
import type { Vehicle } from './src/vehicle';
import { createMap } from './src/map';
import { moveVehicle } from './src/move-vehicle'




 
export function moveRover(plateauSize: string, vehicleStartPosition: string, moveInstructions: string ):string {

	// set up grid
	createMap(Number(plateauSize[0]),Number(plateauSize[1]));

	// set up vehicle 1
	const rover1: Vehicle = { x:Number(vehicleStartPosition[0]), y:Number(vehicleStartPosition[1]), direction:vehicleStartPosition[2]};
	console.log(rover1);

	// moveVehicle(rover1);
	const moveRover1 = moveVehicle(rover1, vehicleStartPosition, moveInstructions);
	console.log("moveRover1 = "+moveRover1); // This will print "the return position will appear here!!" to the console



	return moveRover1;
}
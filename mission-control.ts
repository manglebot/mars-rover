// import { missionControl } from './src/mission-control';
import type { Vehicle } from './src/vehicle';
import { createMap } from './src/map';




// create rover1
const rover1: Vehicle = { x:5, y:5, direction:'N'}
 
export function moveRover(plateauSize: string ):string {

	const mapWidth = plateauSize[0];
	const mapHeight = plateauSize[1];
	
	// console.log ("mapWidth "+mapWidth+" mapHeight "+mapHeight);
// create a test map. There is a console log within the map module.
	createMap(Number(mapWidth),Number(mapHeight));

	console.log(rover1);
	return "00N";
}
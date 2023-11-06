// import { missionControl } from './src/mission-control';
import type { Vehicle } from './src/vehicle';
import { createMap } from './src/map';



createMap(5,5);


const rover: Vehicle = { xLocation:5, yLocation:5, direction:'N'}
 
export function moveRover(moveData:string ):string {
	console.log(rover);
	return "00N";
}
import type { Vehicle } from "./src/vehicle";
import { createMap } from "./src/map";
import { moveVehicle } from "./src/move-vehicle";
import { ErrorMessages, ErrorHandler } from "./src/errorHandler";

export function operationGo(
  plateauSize: string,
  vehicle1StartPosition: string,
  vehicle1MoveInstructions: string,
  vehicle2StartPosition: string,
  vehicle2MoveInstructions: string
): string  {

  // set up map - refactor to allow for map sizes beyond 9x9!! ie .split(' ') or just bring in as numbers
  const [mapRows, mapColumns] = createMap(Number(plateauSize[0]), Number(plateauSize[1]));
  // shows nice diagram of map for checking data

//   console.log("rowCount: "+mapRows); // Access the number of rows
//   console.log("columnCount: "+mapColumns); // Access the number of columns

  // set up vehicle 1 (refactor to allow for vehicles to position on map beyond 9x9)
  const rover1: Vehicle = {
    x: Number(vehicle1StartPosition[0]),
    y: Number(vehicle1StartPosition[1]),
    direction: vehicle1StartPosition[2],
  };

  // moveVehicle(rover1);
  const moveRover1 = moveVehicle(
    rover1,
    vehicle1StartPosition,
    vehicle1MoveInstructions,
	mapRows,
	mapColumns,
  );

	// set up vehicle 2
  const rover2: Vehicle = {
    x: Number(vehicle2StartPosition[0]),
    y: Number(vehicle2StartPosition[1]),
    direction: vehicle2StartPosition[2]
  };

    // moveRover1 is 1st rover end position;
	const moveRover2 = moveVehicle(
		rover2,
		vehicle2StartPosition,
		vehicle2MoveInstructions,
		mapRows,
		mapColumns,
		moveRover1 as string
	  );
	//   console.log("moveRover2 = " + moveRover2); // This will print "the return position will appear here!!" to the console

  return `${moveRover1} ${moveRover2}`;
}

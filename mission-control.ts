import type { Vehicle } from "./src/vehicle";
import { createMap } from "./src/map";
import { moveVehicle } from "./src/move-vehicle";
import { ErrorMessages, ErrorHandler } from "./src/errorHandler";

export function operationGo(
  plateauSize: number[],
  vehicle1StartPosition: (string | number)[],
  vehicle1MoveInstructions: string,
  vehicle2StartPosition: (string | number)[],
  vehicle2MoveInstructions: string
): string  {

  // set up map - refactor to allow for map sizes beyond 9x9!! ie .split(' ') or just bring in as numbers
  const [mapRows, mapColumns] = createMap(plateauSize[0], plateauSize[1]);

  // set up vehicle 1 (refactor to allow for vehicles to position on map beyond 9x9)
  const rover1: Vehicle = {
    x: vehicle1StartPosition[0] as number,
    y: vehicle1StartPosition[1] as number,
    direction: vehicle1StartPosition[2] as string,
  };

  // moveVehicle(rover1);
  const moveRover1 = moveVehicle(
    rover1,
    vehicle1StartPosition,
    vehicle1MoveInstructions,
	mapRows,
	mapColumns,
  );

  let rover1EndPosition = moveRover1 as string;
  console.log("rover1EndPosition: "+rover1EndPosition);

	// set up vehicle 2
  const rover2: Vehicle = {
    x: vehicle2StartPosition[0] as number,
    y: vehicle2StartPosition[1] as number,
    direction: vehicle2StartPosition[2] as string
  };

    // moveRover1 is 1st rover end position;
	const moveRover2 = moveVehicle(
		rover2,
		vehicle2StartPosition,
		vehicle2MoveInstructions,
		mapRows,
		mapColumns,
		rover1EndPosition
	  );
	//   console.log("moveRover2 = " + moveRover2); // This will print "the return position will appear here!!" to the console

  return `${moveRover1} ${moveRover2}`;
}

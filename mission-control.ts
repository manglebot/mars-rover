import type { Vehicle } from "./src/vehicle";
import { createMap } from "./src/map";
import { moveVehicle } from "./src/move-vehicle";

export function operationGo(
  plateauSize: number[],
  vehicle1StartPosition: (string | number)[],
  vehicle1MoveInstructions: string,
  vehicle2StartPosition: (string | number)[],
  vehicle2MoveInstructions: string
): string {
  // here we set the map up
  const [mapRows, mapColumns] = createMap(plateauSize[0], plateauSize[1]);

  // set up vehicle 1
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
    mapColumns
  );
  const rover1EndPosition: (string | number)[] = [
    ...(moveRover1 as string | number[]),
  ];

  rover1EndPosition.pop();

  console.log("rover1EndPosition: " + rover1EndPosition);

  // set up vehicle 2
  const rover2: Vehicle = {
    x: vehicle2StartPosition[0] as number,
    y: vehicle2StartPosition[1] as number,
    direction: vehicle2StartPosition[2] as string,
  };

  // moveRover1 is 1st rover end position;
  const moveRover2 = moveVehicle(
    rover2,
    vehicle2StartPosition,
    vehicle2MoveInstructions,
    mapRows,
    mapColumns,
    rover1EndPosition as number[]
  );

  return `${moveRover1} ${moveRover2}`;
}

import type { Vehicle } from "./vehicle";
import { ErrorMessages, ErrorHandler, throwError } from "./errorHandler";

export function moveVehicle(
  vehicleName: Vehicle,
  vehicleStartPosition: string,
  moveInstructions: string,
  mapRows: number,
  mapColumns: number,
  vehicle1endPosition?: string
): string | ErrorHandler {

    // refactor to use incoming number!!! (or perhaps map if still a string)
    let vehicleOneX: number;
    let vehicleOneY: number;

    if (vehicle1endPosition){
        vehicleOneX =  Number(vehicle1endPosition[0]);
        vehicleOneY =  Number(vehicle1endPosition[1]);
    };

    // turn instructions into Array (to iterate through)
  const moveInstructionsArray = moveInstructions.split("");

  const initialDirection = vehicleStartPosition[2];
  const compass = "NESW";

  // turn current position into index number (to cycle through compass)
  let currentDirection = compass.indexOf(initialDirection);

  // turn left or right or move!
  moveInstructionsArray.forEach((instruction) => {
    if (instruction === "L") {
      turnLeft();
    } else if (instruction === "R") {
      turnRight();
    } else {
      switch (vehicleName.direction) {
        case "N":
          vehicleName.y += 1;
          if(vehicleName.y > mapColumns){
              throwError(ErrorMessages.OutOfBounds);
          }
          if(vehicleName.y === vehicleOneY){
            throwError(ErrorMessages.CrashDetector);
        }
          break;
        case "E":
          vehicleName.x += 1;
          if(vehicleName.x > mapRows){
            throwError(ErrorMessages.OutOfBounds);
        }
            if(vehicleName.x === vehicleOneX){
            throwError(ErrorMessages.CrashDetector);
        }
          break;
        case "S":
          vehicleName.y -= 1;
          if(vehicleName.y < 0 ){
            throwError(ErrorMessages.OutOfBounds);
        }
          if(vehicleName.y === vehicleOneY){
            throwError(ErrorMessages.CrashDetector);
        }
          break;
        case "W":
          vehicleName.x -= 1;
          if(vehicleName.x < 0 ){
            throwError(ErrorMessages.OutOfBounds);
        }
        if(vehicleName.x === vehicleOneX){
            throwError(ErrorMessages.CrashDetector);
        }
          break;
      }
    }
  });

  function turnLeft() {
    currentDirection = (currentDirection - 1 + 4) % 4;
    return (vehicleName.direction = compass[currentDirection]);
  }

  function turnRight() {
    currentDirection = (currentDirection + 1) % 4;
    return (vehicleName.direction = compass[currentDirection]);
  }

  return `${vehicleName.x}${vehicleName.y}${vehicleName.direction}`;
}
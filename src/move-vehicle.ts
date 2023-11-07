import type { Vehicle } from "./vehicle";

export function moveVehicle(vehicleName: Vehicle, vehicleStartPosition: string, moveInstructions: string): string {

const moveInstructionsArray = moveInstructions.split('');

const initialDirection = vehicleStartPosition[2];
const compass = "NESW";

// turn current position into index number (to cycle through compass)
let currentDirection = compass.indexOf(initialDirection);

// turn left or right or move!
moveInstructionsArray.forEach(instruction => {
    if(instruction === 'L'){
        turnLeft();
    } else if (instruction === 'R'){
        turnRight();
    } else {
        switch (vehicleName.direction) {
            case "N":
              vehicleName.y += 1;
              break;
            case "E":
              vehicleName.x += 1;
              break;
            case "S":
              vehicleName.y -= 1;
              break;
            case "W":
              vehicleName.x -= 1;
              break;
          }
    }
});

function turnLeft() {
    currentDirection = (currentDirection - 1 + 4) % 4;
    return vehicleName.direction = compass[currentDirection];
}

function turnRight() {
    currentDirection = (currentDirection + 1) % 4;
    return vehicleName.direction = compass[currentDirection];
}

console.log("move instructions are "+moveInstructions);

// need to add M action before switch is triggered

    // if x or y  > allowed then run errorHander



    return `${vehicleName.x}${vehicleName.y}${vehicleName.direction}`;
}
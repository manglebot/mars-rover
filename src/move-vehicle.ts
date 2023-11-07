import type { Vehicle } from "./vehicle"

export function moveVehicle(vehicleName:Vehicle):string  {

    if(vehicleName.direction === 'N'){
        console.log("vehicleName.y before = "+vehicleName.y);
        vehicleName.y += 1;
        
    }
// for each movement.... do somthing!!


    // if ( direction === 'N'){
    //     Vehicle += 1;   
    //     return
    // }
    return `the y position is ${vehicleName.y}!!`
}
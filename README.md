# Mars Rover Tech Tasks

## Introduction

👾 🚀 You are working in an Engineering Squad for the 🎶 Melody Mars Mission,
tasked with designing software to manage robots 🤖 and cool vehicles for space exploration! 👽 🛸🌏

## Goal

You have been asked to create a program to move rovers around the surface of Mars!
✨
The surface of Mars is represented by a Plateau. You can make the assumption that the
Plateau is a square/rectangular grid for the purpose of this task.
Rovers navigate the Plateau so they can use their special cameras 📷 and robot arms
🦾 to collect samples back to Planet Earth 🌏

## Instructions to follow

controls are input via the test file

operationGo is triggered by the test file similar to below

test('operationGo should return "13N 51E"', () => {
  const result = operationGo([5,5],[1,2,'N'],'LMLMLMLMM',[3,3,'E'],'MMRMMRMRRM');
  expect(result).toBe('1,3,N 5,1,E');
});

Here the initial grid size for the map is set in an array.
Then the first vehicle location is added also as an array. [x, y, direction faced].
Then the required movement is added as a text string. L for left, R for Right, M to move one place forwards in whichever direction the vehicle is facing.
The same is then done for the next vehicle.

Key features
============

The vehicles are set up and moved by Mission Control.

I have hard coded the vehicles within Mission Control.
As the first vehicle always moves first, the collision data is only sent to the 2nd vehicle.

Future Thoughts
===============

I now realise the the error data should just trigger a function (or similar) and supply correct feedback
Rather than trigger a full system Error that stops the whole program.


The input could be improved to be more obvious. Perhaps as an object

eg {
    mapCoordinates:[5,5],
    vehicle:[
        vehicleName: rover1,
        vehicleStartX: 2,
        vehicleStartY: 4
            ],
    vehicle:[
        vehicleName: rover2,
        vehicleStartX: 3,
        vehicleStartY: 5
            ]
}

This would allow for more than 2 vehicles, and the vehciles could be set up at run time
rather than in mission control, which seems a bit cluttered.

If I had time, I would like to work out how to turn this into a user input version of sorts.


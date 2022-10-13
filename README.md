# Robot Interface, Coding Assignment 🤖
A CLI to control a 'Robot' moving about a wire mesh grid.
The Robot receives commands and tries to execute them based on user input.

This was made as a Coding assigment for Devoteam. 

Written in Javascript using Node by Erik Gullberg.

## Prerequisites
Node 18.10.0 installed

## Installation
### 1. Clone repo.
### 2. Install
`
npm install
`
### 3. Ready to go!

### Run main program
`node index.js`

### Run Tests
`node tests.js`

## Usage
The user is both prompted through and passes data through the standard input.

The grid columns and rows coordinates start at 0. 
e.g. In a _5x5_ grid, _0,2_ would be the coordinates of the middle row's leftmost column.

Supported commands for the Robot are: `L = Turn Left. R = Turn Right. F = Move Forward`

1. When prompted, pass in the grid size by providing the X and Y axis as numbers separated by a space. ex. `5 5`
2. When prompted, provide the starting position for the Robot as X Y coordinates and a Cardinal Direction the Robot is facing. ex. `2 2 N` 
3. When prompted, pass in commands for the Robot to execute. Commands will be executed in order. ex. `LLFFRRFFL`
4. After executing commands, the robot provides its position and the program exits.

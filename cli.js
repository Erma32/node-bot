import readline from "readline";
import { gridSizeIsNotValid, orientationIsNotValid } from "./Utils/Utils.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askForGridSize = () => {
  return new Promise((resolve) => {
    rl.question("Enter grid size (x y): ", (widthAndHeight) => {
      const gridSize = widthAndHeight.trim().split(" ");

      resolve(gridSize);
    });
  });
};

const askForRobotOrientation = () => {
  return new Promise((resolve) => {
    rl.question("Enter Robot Orientation (x y d): ", (orientation) => {
      const orientationValues = orientation.trim().split(" ");

      resolve(orientationValues);
    });
  });
};

export const askForRobotCommands = () => {
  return new Promise((resolve) => {
    rl.question(
      "Enter commands: \n (L = Turn Left. R = Turn Right. F = Move Forward) ",
      (commands) => {
        const commandsArray = commands.trim().toUpperCase().split("");

        resolve(commandsArray);
      }
    );
  });
};

async function getGridSizeFromUser() {
  let gridSize = await askForGridSize();
  while (gridSizeIsNotValid(gridSize)) {
    console.warn("Invalid grid size!");
    gridSize = await askForGridSize();
  }
  return gridSize;
}

async function getOrientationFromUser() {
  let orientation = await askForRobotOrientation();
  while (orientationIsNotValid(orientation)) {
    console.warn("Invalid orientation!");
    orientation = await askForRobotOrientation();
  }
  return orientation;
}

export { getGridSizeFromUser, getOrientationFromUser };

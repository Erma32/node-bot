import Robot from "./Classes/robot.js";
import Board from "./Classes/board.js";
import CardinalDirections from "./Utils/cardinalDirections.js";
import {
  askForRobotCommands,
  getGridSizeFromUser,
  getOrientationFromUser,
} from "./cli.js";

/**
 * Creates a new robot after validating its position.
 * @returns {Robot}
 * @throws Will throw if the position is out of bounds
 */
function createRobot(position, direction, board) {
  if (board.positionIsValid(position)) {
    return new Robot(position, direction);
  } else {
    throw "Invalid spawn position for robot";
  }
}

/**
 * Moves the provided robot if its next position is valid.
 * If next position is invalid, the robot will stay in position.
 * @param {Robot} robot
 * @param {Board} board
 */
function moveRobot(robot, board) {
  const positionToMoveTo = robot.getNextPosition();
  if (board.positionIsValid(positionToMoveTo)) {
    robot.move();
  } else {
    console.log("Hit something. Ouch!");
  }
}

/**
 * Executes an array of commands on the provided robot and board
 * @param {string[]} commands Array of commands.
 * @param {Robot} robot
 * @param {Board} board
 */
export function executeCommands(commands, robot, board) {
  for (const command of commands) {
    switch (command) {
      case "L":
        robot.turnLeft();
        break;
      case "R":
        robot.turnRight();
        break;
      case "F":
        moveRobot(robot, board);
        break;
      default:
        console.info(`Invalid command provided: ${command}`);
    }
  }
}

const main = async () => {
    try {
        console.info("Welcome to the Robot interface!");

        const gridSize = await getGridSizeFromUser();

        const numColumns = gridSize[0];
        const numRows = gridSize[1];

        const board = new Board(numColumns, numRows);

        const orientation = await getOrientationFromUser();

        const position = [...Array(orientation[0], orientation[1])];
        const direction = CardinalDirections.getDirectionByLetter(orientation[2]);


        const robot = createRobot(position, direction, board);

        const commands = await askForRobotCommands();
        executeCommands(commands, robot, board);

        console.log(robot.getPositionReport());
        console.log("Done!");
        
    } catch (error) {
        console.error("An error occurred!");
        console.error(error);
    }
};

main().then(() => console.info("Shutting down..."));

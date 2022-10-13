import test from "node:test";
import assert from "node:assert";
import Compass from "./Classes/compass.js";
import CardinalDirections from "./Utils/cardinalDirections.js";
import Robot from "./Classes/robot.js";

test("Turn left", () => {
  const compass = new Compass();

  compass.turnLeft();

  assert.equal(CardinalDirections.west.value, compass.currentDirection.value);
});

test("Turn right", () => {
  const compass = new Compass();

  compass.turnRight();

  assert.equal(CardinalDirections.east.value, compass.currentDirection.value);
});

test("Move Robot North", () => {
  const robot = new Robot([2, 2]);
  robot.move();

  assert.equal(robot.position[1], 3);
});

test("Turn robot around and move", () => {
  const robot = new Robot([2, 2]);
  const robot2 = new Robot([2, 1]);
  robot.turnRight();
  robot.turnRight();
  robot.move();

  assert.equal(robot.position[1], robot2.position[1]);
});
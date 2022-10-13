import Compass from "./compass.js";
import CardinalDirections from "../Utils/cardinalDirections.js";

class Robot {
  constructor(position, direction = CardinalDirections.north) {
    this._position = position;
    this._compass = new Compass(direction);
  }

  get position() {
    return this._position;
  }

  get direction() {
    return this._compass.currentDirection;
  }

  turnLeft() {
    this._compass.turnLeft();
  }

  turnRight() {
    this._compass.turnRight();
  }

  move() {
    this._position = this.getNextPosition();
  }

  /**
   * Returns the next position for the robot if it were to move.
   */
  getNextPosition() {
    const x = Number(this.position[0]);
    const y = Number(this.position[1]);

    switch (this.direction.value) {
      case CardinalDirections.north.value:
        return [x, y + 1];
      case CardinalDirections.east.value:
        return [x + 1, y];
      case CardinalDirections.south.value:
        return [x, y - 1];
      case CardinalDirections.west.value:
        return [x - 1, y];
    }
  }

  getPositionReport() {
    return (
      "Robot Position Report: " +
      this._position[0] +
      ", " +
      this._position[1] +
      ", " +
      this.direction.letter
    );
  }
}

export default Robot;

import CardinalDirections from "./cardinalDirections.js";

export function orientationIsNotValid(orientation) {
  return (
    orientation === undefined ||
    orientation.length !== 3 ||
    isNaN(orientation[0]) ||
    isNaN(orientation[1]) ||
    orientation[0] < 0 ||
    orientation[1] < 0 ||
    !CardinalDirections.directionLetters.includes(orientation[2])
  );
}

export function gridSizeIsNotValid(gridSize) {
  return (
    gridSize === undefined ||
    gridSize.length !== 2 ||
    isNaN(gridSize[0]) ||
    isNaN(gridSize[1]) ||
    gridSize[0] < 1 ||
    gridSize[1] < 1
  );
}

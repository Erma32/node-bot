class CardinalDirections {
  static north = { value: 1, letter: "N" };
  static east = { value: 2, letter: "E" };
  static south = { value: 3, letter: "S" };
  static west = { value: 4, letter: "W" };

  static directionLetters = ["N", "W", "S", "E"];

  static getDirectionByLetter(letter) {
    switch (letter) {
      case CardinalDirections.north.letter:
        return CardinalDirections.north;
      case CardinalDirections.east.letter:
        return CardinalDirections.east;
      case CardinalDirections.south.letter:
        return CardinalDirections.south;
      case CardinalDirections.west.letter:
        return CardinalDirections.west;
      default:
        return CardinalDirections.north;
    }
  }
}

export default CardinalDirections;

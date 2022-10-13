class Board {
  constructor(numColumns, numRows) {
    this.grid = this.constructGrid(numColumns, numRows);
  }

  constructGrid(numColumns, numRows) {
    if (numColumns < 1 || numRows < 1) {
      throw "Invalid grid size";
    }

    let grid = [];

    [...Array(Number(numColumns))].forEach((_, x) => {
      grid.push([]);
      [...Array(Number(numRows))].forEach((_, y) => {
        grid[x].push([y + ", " + x]);
      });
    });
    return grid;
  }

  /**
   * Checks if the provided position exists on the current board.
   * @param position
   * @returns {boolean}
   */
  positionIsValid(position) {
    const x = position[0];
    const y = position[1];

    const row = this.grid[y];

    if (!row) {
      return false;
    }

    const column = row[x];

    return !!column;
  }
}

export default Board;

const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (matrix[i][j]) {
        for (let row = i - 1; row <= i + 1; row += 1) {
          for (let col = j - 1; col <= j + 1; col += 1) {
            if (row >= 0 && row < rows && col >= 0 && col < cols) result[row][col] += 1;
          }
        }
      }
    }
  }
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (matrix[i][j]) {
        result[i][j] = 1;
      }
    }
  }
  return result;
  throw new NotImplementedError("Not implemented");
}

module.exports = {
  minesweeper,
};

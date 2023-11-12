const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  };
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case "--discard-prev":
        if (i === 0) {
          return transform(arr.slice(1));
        }
        arr = arr.slice(0, i - 1).concat(arr.slice(i + 1));
        break;
      case "--double-prev":
        if (i === 0) {
          return transform(arr.slice(1));
        }
        arr = arr
          .slice(0, i)
          .concat(arr[i - 1])
          .concat(arr.slice(i + 1));
        break;
      case "--discard-next":
        if (i === arr.length - 1) {
          return arr.slice(0, -1);
        }
        if (i === 0) {
          arr = arr.slice(1);
          break;
        }
        arr = arr.slice(0, i).concat(arr.slice(i + 2));
        break;
      case "--double-next":
        if (i === arr.length - 1) {
          return arr.slice(0, -1);
        }
        arr = arr
          .slice(0, i)
          .concat(arr[i + 1])
          .concat(arr.slice(i + 1));
        break;
      default:
        break;
    }
  }
  arr = arr.map(((el) => el === '--double-prev' || el === '--discard-prev' ? delete el : el)).filter((el) => el !== false);
  return arr;
}

module.exports = {
  transform,
};

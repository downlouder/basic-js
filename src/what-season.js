const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const arr = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];
  if (date === undefined) return "Unable to determine the time of year!";
  if (
    date &&
    typeof date.getMonth === "function" &&
    date instanceof Date &&
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date)
  )
    return arr[date.getMonth()];
  throw Error("Invalid date!");
}

module.exports = {
  getSeason,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  options.repeatTimes ? options.repeatTimes : options.repeatTimes = 1;
  options.additionRepeatTimes ? options.additionRepeatTimes : options.additionRepeatTimes = 1;
  for (let i = 0; i <= options.repeatTimes; i += 1) {
    result += str;
    for (let j = 0; j <= options.additionRepeatTimes; j += 1) {
      result += options.addition;
      if (j === options.additionRepeatTimes - 1) break;
      result += options.additionSeparator || '|';
    }
    if (i === options.repeatTimes - 1) break;
    result += options.separator || '+';
  }
  return result.replaceAll('undefined', '');
}

module.exports = {
  repeater,
};

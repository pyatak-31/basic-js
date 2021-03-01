const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '',
    addition = '';

  options.repeatTimes == undefined ? options.repeatTimes = 1 : 0

  options.additionRepeatTimes == undefined ? options.additionRepeatTimes = 1 : 0

  options.addition === undefined ? options.addition = '' : 0

  options.separator == undefined ? options.separator = '+' : 0

  options.additionSeparator == undefined ? options.additionSeparator = '|' : 0;

if (options.additionRepeatTimes == (0||1)) {
  addition += `${options.addition}`
} else {
  for (let j = 0; j < options.additionRepeatTimes; j++) {
    if (j == options.additionRepeatTimes - 1) {
      addition += `${options.addition}`
    } else {
      addition += `${options.addition}${options.additionSeparator != '' ? options.additionSeparator : '|'}`
    }
  }
}

if (options.repeatTimes == (0||1)) {
  res += `${str}${addition}`;
} else {
  for (let i = 0; i < options.repeatTimes; i++) {
    if (i == options.repeatTimes - 1) {
      res += `${str}${addition}`;
    } else {
      res += `${str}${addition}${options.separator != '' ? options.separator : '+'}`
    }
  }
}

return res;
};
  
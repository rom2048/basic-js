function repeater( str, options ) {
  str = String(str);
  let repeatTimes = (options.repeatTimes === undefined) ? 1 : options.repeatTimes;
  let separator = (options.separator === undefined) ? '+' : options.separator;
  let addition = (options.addition === undefined) ? '' : String(options.addition);
  let additionRepeatTimes = (options.additionRepeatTimes === undefined) ? 1 : options.additionRepeatTimes;
  let additionSeparator = (options.additionSeparator === undefined) ? "|" : options.additionSeparator;

  let admixture = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(str + admixture).join(separator);
}

module.exports = {
  repeater
};

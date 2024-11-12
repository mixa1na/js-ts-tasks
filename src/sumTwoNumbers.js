/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  throw new Error('Not implemented');
};
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const a = Number(firstNumber.toString().replace(/\s+/g, '').trim());
  const b = Number(secondNumber.toString().replace(/\s+/g, '').trim());

  return a + b;
};
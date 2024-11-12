/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  throw new Error('Not implemented'); // remove this line
};
module.exports.digitsSum = function digitsSum(n) {
  n = Math.abs(n);
  const digits = n.toString().split('');
  const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
  return sum;
};
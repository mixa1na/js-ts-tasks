/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  throw new Error('Not implemented');
};
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);
  if (start > end) {
    [start, end] = [end, start];
  }
  const numTerms = end - start + 1;
  const sum = (start + end) * numTerms / 2;

  return sum;
};
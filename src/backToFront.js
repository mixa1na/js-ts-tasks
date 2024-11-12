/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  throw new Error('Not implemented');
};
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (typeof str !== 'string' || typeof symbolsCount !== 'number') {
    throw new Error('Invalid input');
  }
  if (str.length < symbolsCount) {
    return str;
  }
  const front = str.slice(-symbolsCount);
  const back = str.slice(-symbolsCount); 
  return front + str + back;
};
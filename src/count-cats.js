const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const flat = matrix.flat();
  const count = flat.reduce((acc, val) => {
    if (val === '^^') {
      acc++;
    }
    return acc;
  }, 0);
  return count;  
}

module.exports = {
  countCats
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
  }
    else {
      if (count === 0) {
        newArr.push(arr[i]);
      }
      else { 
        newArr.push(count+1);
        newArr.push(arr[i]);
        count = 0;
      }
    }
}
  return newArr.join('');
}

module.exports = {
  encodeLine
};

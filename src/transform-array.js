const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
       case '--discard-next':
         if (arr.length > i+1) i++;
         break;
       case '--discard-prev':
         if (newArr.length > 0 && newArr[newArr.length - 1] === arr[i - 1] ) newArr.pop();
          break;
       case '--double-next':
         if (arr.length > i+1) newArr.push(arr[i + 1]);
         break;
       case '--double-prev':
         if (arr[i - 1] && arr[i - 2] != '--discard-next') newArr.push(arr[i - 1]);
         break;
       default:
         newArr.push(arr[i]);
    }
 }
 return newArr;

}

module.exports = {
  transform
};

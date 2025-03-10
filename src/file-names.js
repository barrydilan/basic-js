const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
//   let counter = 1;
//   let result = [];
//   for (let i = 0; i < names.length; i++) {
//     if (result.includes(names[i])) {
//       let newName = names[i] + `(${counter})`;
//       result.push(newName);
//       counter++;
//       i--;
//     } else {
//       result.push(names[i]);
//     }
//   }
//   return names;
//   console.log('first')
  const renamed = {};
  const result = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    let newName = name;

    if (renamed[newName] === undefined) {
      renamed[newName] = 0;
    } else {
      renamed[newName]++;
      newName = `${name}(${renamed[newName]})`;
    }

    result.push(newName);
    renamed[newName] = 0;
  }

  return result;
}






module.exports = {
  renameFiles
};

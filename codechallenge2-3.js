// Challenge 3: Flatten array. Take an array of arrays and flatten to a single array.
function flattenArray(arrays) {
  return [].concat(...arrays);
}
const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
console.log(output);

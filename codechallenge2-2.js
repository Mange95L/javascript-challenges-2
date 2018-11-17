// Challenge 2: Array Chunking. Split an array into chunked arrays of a specific length.

function chunkArray(arr, len) {
  const chunkedArr = [];

  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}
const output = chunkArray(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  4
);
console.log(output);

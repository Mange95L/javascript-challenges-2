// Challenge 1: Longest word, return the longest word of a string, if more than one longest word, put into an array.

function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = wordArr.sort((a, b) => b.length - a.length);

  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

const output = longestWord(
  "This is a test and the longest word/ words will be output"
);

console.log(output);

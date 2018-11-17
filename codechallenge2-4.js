// Challenge 4: Anagram. Return true if anagram and false if not.
function isAnnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
const output = isAnnagram("Pelle svanslös", "Planlös Vessle");

console.log(output);

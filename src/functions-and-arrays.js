// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arr) {
  let wordAtm = "";
  if (!arr.length) return null;
  for (let i = 0; i < arr.length; i++) {
    // loop runs until all array elements are checked
    if (wordAtm.length < arr[i].length) {
      wordAtm = arr[i];
    }
  }
  return wordAtm;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let currentVal = 0;
  for (let i = 0; i < arr.length; i++) {
    currentVal = currentVal + arr[i];
  }
  return currentVal;
}

console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (!arr.length) return 0;
  const sumArr = sumNumbers(arr);
  return sumArr / arr.length;
}
// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

const isthere = "ing";

function doesWordExist(arr, isthere) {
  if (!arr.length) return null;
  if (arr.includes(isthere)) {
    return true;
  } else {
    return false;
  }
}

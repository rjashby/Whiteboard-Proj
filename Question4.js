// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

// USING SET

let input = "hello"
let input2 = "copyright"

function setMethod(str) {
let set = new Set(str);
let result="";
set.forEach(value => result = result+""+ value);
if (str == result) {
  return true;
  } else {
    return false;
  }
}
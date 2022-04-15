// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

// FOR LOOP

function compressStr(str) {
  counter = 1;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i+1]) {
      counter ++;
    } else {
      if (counter > 1) {
        result.push(counter);  
      }
      result.push(str[i]);
      counter = 1;
    }
  }
  return result.join("");
};
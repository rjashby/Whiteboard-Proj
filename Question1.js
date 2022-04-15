// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

function q1(str) {
  let strArray = str.split("");
  let result = [];
  for(let i = 0; i < strArray.length; i++) {
    if (strArray[i] === " ") {
      result.push("%20")
      console.log(strArray[i]);
    } else {
      result.push(strArray[i]);
    }
  }
  let final = result.join("");
  return final;
}


function replaceString(str) {
  const result = str.split(" ").join("%20");
  return result;
}

// WITH RECURSION


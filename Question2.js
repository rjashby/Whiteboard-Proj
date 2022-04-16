// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]


//  NO FILTER

let input = [7, 9, "hi", 12, "hi", 7, 53];
let set = new Set(input);
let newArray = Array.from(set);

// FILTER

function noDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

// FOR EACH 

function noDuplicates2(arr) {
  let result = []; 
  arr.forEach((item) => {  
    if(!result.includes(item)){  
        result.push(item);  
    }  
  }); 
  return result;
}
 

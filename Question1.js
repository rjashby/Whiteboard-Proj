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


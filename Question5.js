// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

// METHOD 1

function sort1(arr){
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] < arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
  return arr;
}

// METHOD 2

var done = false;
   //prevents loop ending before the array is properly sifted through enough times
  function sort (array) {
  while (!done) {
    done = true;
    //this code is set in a way so that the biggest number will always go to the end of the array
    //it does this by checking if the number listed before it in the array is bigger than the current
    //number listed in the array.
    //Therefore, i is set to 1 instead of 0 so that the code is able to check "is the number behind me bigger?"
    for (var i = 1; i < array.length; i += 1) {
      //compares item in list before current item to the current item
      if (array[i - 1] > array[i]) {
        //tells the program to continue looping because there is still a number out of place.
        done = false;
        //tmp is used to temporarily copy the value of the bigger number onto itself
        var tmp = array[i - 1];
        //the bigger number then becomes the current number
        array[i - 1] = array[i];
        //and the current number then becomes the number which was previously before it. (thanks tmp)
        array[i] = tmp;
        //the code will continue to push the bigger numbers to the front until the conditional
        //no longer tells done to equal false, thus ending the looping and sorting the array.
      }
    }
  }
  }
var numbers = [12, 10, 15, 11, 14, 13, 16];
sort(numbers);

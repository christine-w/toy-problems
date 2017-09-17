/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/*
Inputs: array(n) of numbers and a number
Outputs: array(2) of numbers
Constraints: elements in output array are distinct
Edge Cases: target sum is twice one of the elements
Assumptions: Each input has exactly one solution
No impact: length of array, sorting of array, sign of numbers
Not dealing with: invalid input (e.g., non-number inputs) or empty/null Inputs

Purpose/Justification: Given a target sum, find the distinct indices of the two
numbers in the given array that add up to that sum.

Explanation: The output array is of length two and each element is in the range
[0, inputArray.length-1] and distinct from one another. The elements at the output
indices in the input array add up to the target sum.

Verification:
 * example:   findTwoNumbersForSum([2, 7, 11, 15], 9) = [0, 1]
              findTwoNumbersForSum([2, 4, 6, 15], 8) = [0, 2]
              findTwoNumbersForSum([2, 4, 4, 15], 8) = [1, 2]
              findTwoNumbersForSum([2, 4, 6, 11, 15], 15) = [1, 3]
              findTwoNumbersForSum([2, -4, 6, -1], -5) = [1, 3]

Approximation: psuedocode inline
*/

const findTwoNumbersForSum = function(array, targetSum) {
  let output = [];
  // use a dictionary to track occurrence of element and its index
  const elementIndexLookUp = {};

  // for each element in the array, find its difference wrt targetSum
  for (let i = 0; i < array.length; i++) {
    // look up difference in dictionary
    const difference = (targetSum - array[i]).toString();
    // if the difference is in the dictionary, output is the value of that property
    // and the the current element index; break out of loop
    if (elementIndexLookUp.hasOwnProperty(difference)) {
      output = [ elementIndexLookUp[difference], i ];
      break;
    }
    // otherwise, store current element and index in the dicitionary
    elementIndexLookUp[array[i]] = i;
  }

  // return two-element array of input array indices
  return output;
};

console.log(findTwoNumbersForSum([2, 7, 11, 15], 9)); //=> [0, 1]
console.log(findTwoNumbersForSum([2, 4, 6, 15], 8)); //=> [0, 2]
console.log(findTwoNumbersForSum([2, 4, 4, 15], 8)); //=> [1, 2]
console.log(findTwoNumbersForSum([2, 4, 6, 11, 15], 15)); //=> [1, 3]
console.log(findTwoNumbersForSum([2, -4, 6, -1], -5)); //=> [1, 3]

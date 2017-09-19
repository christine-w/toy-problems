/* Given two arrays, determine if A is a contiguous subarray of B.
isSub(['f', 2, 'c', 0], ['a', 'f', 2, 'c', 0]); // => true
isSub(['a', 'b', 'c'], ['a', 'b', 'd', 'c']); // => false
isSub(['a', 'b'], ['a']); // => false
*/

/*
Inputs: two arrays
Output: boolean
Constraints: none
Edge cases: empty array is subset of any array, are string versions of numbers
equal to the number? (assume no)

Purpose/Justification: Given two arrays, determine if the first array can be found
in the second array.

Explanation: If all the elements in the first array can be found in the second
array in the same order and contiguously, the function returns true. Otherwise,
it returns false. If the first array is longer than the second array, the result
is necessarily false regardless of the second array. Conversely, if the first
array is empty, the result is necessarily true regardless of the second array. If
second array contains all the elements of the first, these elements must be in
the same order and in one contiguous block.

Verification: above test cases and also
* isSub(['f', '2', 'c', 0], ['a', 'f', 2, 'c', 0]); // => false
* isSub(['a', 'bd', 'c'], ['a', 'b', 'd', 'c']); // => false

Naive approach:
* check for the cases of longer first array or empty first array
* Iterate over the second array in range [0, length_second - length_first]
  * In each loop, iterate through the length of the first and compare the values
    between the first and second array at the same relative index
  * If all elements match, return true and break
* If match has not been found after completing all iterations, return false.
*/

// Time complexity: O(n*(m-n)) -> O(mn - n^2),
// n = length of array 1, m = length of array 2
const isSub = function(arr1, arr2) {
  if (arr1.length === 0) return true;
  if (arr1.length > arr2.length) return false;

  for (let i = 0; i <= arr2.length - arr1.length; i++) {
    // slight improvement by using for-loop and breaking early
    // once unmatching element is found -- doesn't improve worst case time
    // complexity
    if (arr1.every((element, index) => element === arr2[i + index])) {
      return true;
    }
  }

  return false;
};

console.log(isSub(['f', 2, 'c', 0], ['a', 'f', 2, 'c', 0])); // => true
console.log(isSub(['a', 'b', 'c'], ['a', 'b', 'd', 'c'])); // => false
console.log(isSub(['a', 'b'], ['a'])); // => false
console.log(isSub(['f', '2', 'c', 0], ['a', 'f', 2, 'c', 0])); // => false
console.log(isSub(['a', 'bd', 'c'], ['a', 'b', 'd', 'c'])); // => false
console.log(isSub(['f', 2, 'c', 0], ['f', 2, 'c', 0])); // => true
console.log(isSub([], ['f', 2, 'c', 0])); // => true
console.log(isSub(['f', 2, 'c', 0], ['f', 2])); // => false

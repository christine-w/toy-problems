/*
Given two strings, determine if A can be formed by rearranging the letters in B, allowing for leftover characters.
canBabbyBeFormed('abc', 'cba') // => true
canBabbyBeFormed('abc', 'cbab') // => true
canBabbyBeFormed('abc', 'abc') // => true
canBabbyBeFormed('aaa', 'abc') // => false
canBabbyBeFormed('abcb', 'abc') // => false

Input: two strings
Output: boolean
Constraints: none
Edge Cases: empty string inputs

Goal: Determine if the second string has at least the number of each character
present in the first string.

Approach:
  Use two data structures to store the count of each different character in each
  string. Specifically, this is an associative array where each key-value pair
  stores the character as the key and the number of occurrences in the string as
  its value.

  Iterate through all the keys in the object corresponding to the first string.
  If all keys in the first object exist in the second and have equal or lesser values,
  return true. Else, return false.
*/

const tallyCharCounts = function(str) {
  const obj = {};
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
};

const canBabbyBeFormed = function(str1, str2) {
  if (str1.length > str2.length) return false;

  const str1CharCounts = tallyCharCounts(str1);
  const str2CharCounts = tallyCharCounts(str2);

  for (let char in str1CharCounts) {
    if (!str2CharCounts.hasOwnProperty(char)) return false;
    if (str2CharCounts[char] < str1CharCounts[char]) return false;
  }
  return true;
};

console.log(canBabbyBeFormed('abc', 'cba')); // => true
console.log(canBabbyBeFormed('abc', 'cbab')); // => true
console.log(canBabbyBeFormed('abc', 'abc')); // => true
console.log(canBabbyBeFormed('aaa', 'abc')); // => false
console.log(canBabbyBeFormed('abcb', 'abc')); // => false

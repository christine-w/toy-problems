/*
Given two strings, determine if A is an exact anagram of B.
isAna('abc', 'cba') // => true
isAna('abc', 'cbab') // => false
isAna('abc', 'abc') // => true

input: two strings
output: boolean
constraints: none
edge cases: empty strings

Approach: This is essentially the same problem as "CanBabbyBeFormed"
If the lengths of the two strings are different, return false.
Use an associative array to tally up the characters and number of occurrences
in the first string. Then iterate through the second string, one character at a
time. If the character is not present in the associative array, return false. If
it is present but the corresponding count is zero, return false. Otherwise,
decrement the corresponding count. If we are able to finish iterting through the
string, return true.
*/

const isAna = function(str1, str2) {
  if (str1.length !== str2.length) return false;
  const str1TallyCount = {};
  for (let char of str1) {
    str1TallyCount[char] = (str1TallyCount[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!str1TallyCount.hasOwnProperty(char)) return false;
    if (str1TallyCount[char] === 0) return false;
    str1TallyCount[char]--;
  }
  return true;
};

console.log(isAna('abc', 'cba')); // => true
console.log(isAna('abc', 'cbab')); // => false
console.log(isAna('abc', 'abc')); // => true

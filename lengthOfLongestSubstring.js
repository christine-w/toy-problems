/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring,
 "pwke" is a subsequence and not a substring.
*/

/*
Approach:
Use a set to keep track of characters that have already been seen.
Track the longest length with a variable (initialized to 0) -- this is the return value
Iterate through the string and check each character:
  Keep a count for the current distinct character substring length
  If character is not in the set, increment current length count and add character to set
  If character is in the set, update longest length if current length is greater,
  reset current length counter to zero and clear set.
Return longest length
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let currentLength = 0;
  const subStringCharacters = new Set();

  for (let char of s) {
    if (subStringCharacters.has(char)) {
      maxLength = currentLength > maxLength ? currentLength : maxLength;
      subStringCharacters.clear();
      subStringCharacters.add(char);
      currentLength = 1;
    } else {
      subStringCharacters.add(char);
      currentLength++;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // => 3
console.log(lengthOfLongestSubstring('bbbbb')); // => 1
console.log(lengthOfLongestSubstring('pwwkew')); // => 3
console.log(lengthOfLongestSubstring('')); // => 0

var longestSubstring = function(s) {
  let longestSubstring = '';
  let currentSubstring = '';
  const subStringCharacters = new Set();

  for (let char of s) {
    if (subStringCharacters.has(char)) {
      longestSubstring = currentSubstring.length > longestSubstring.length ? currentSubstring : longestSubstring;
      subStringCharacters.clear();
      subStringCharacters.add(char);
      currentSubstring = char;
    } else {
      subStringCharacters.add(char);
      currentSubstring += char;
    }
  }
  return longestSubstring;
};

console.log(longestSubstring('abcabcbb')); // => 'abc'
console.log(longestSubstring('bbbbb')); // => 'b'
console.log(longestSubstring('pwwkew')); // => 'wke'
console.log(longestSubstring('')); // => ''

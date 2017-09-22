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
  const subStringCharacters = {};

  for (let i = 0; i < s.length; i++) {
    if (subStringCharacters.hasOwnProperty(s[i])) {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = i - subStringCharacters[s[i]];
    } else {
      currentLength++;
    }
    subStringCharacters[s[i]] = i;
  }
  return Math.max(maxLength, currentLength);
};

console.log(lengthOfLongestSubstring('abcabcbb')); // => 3
console.log(lengthOfLongestSubstring('bbbbb')); // => 1
console.log(lengthOfLongestSubstring('pwwkew')); // => 3
console.log(lengthOfLongestSubstring('a')); // => 1
console.log(lengthOfLongestSubstring('abad')); // => 3
console.log(lengthOfLongestSubstring('bacad')); // => 3
console.log(lengthOfLongestSubstring('aba')); // => 2
console.log(lengthOfLongestSubstring('')); // => 0

var longestSubstring = function(s) {
  let longestSubstring = '';
  let currentSubstring = '';
  const subStringCharacters = {};

  for (let i = 0; i < s.length; i++) {
    if (subStringCharacters.hasOwnProperty(s[i])) {
      longestSubstring = currentSubstring.length > longestSubstring.length ? currentSubstring : longestSubstring;
      currentSubstring = currentSubstring.substring(subStringCharacters[s[i]] + 1) + s[i];
    } else {
      currentSubstring += s[i];
    }
    subStringCharacters[s[i]] = i;
  }
  return currentSubstring.length > longestSubstring.length ? currentSubstring : longestSubstring;
};

console.log(longestSubstring('abcabcbb')); // => 'abc'
console.log(longestSubstring('bbbbb')); // => 'b'
console.log(longestSubstring('pwwkew')); // => 'wke'
console.log(longestSubstring('a')); // => 'a'
console.log(longestSubstring('abad')); // => 'bad'
console.log(longestSubstring('bacad')); // => 'bac'
console.log(longestSubstring('aba')); // => 'ab'
console.log(longestSubstring('')); // => ''

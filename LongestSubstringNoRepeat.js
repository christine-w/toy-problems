/*
Source: https://leetcode.com/problems/longest-substring-without-repeating-characters

Given a string, find the length of the longest substring without repeating characters.

Examples:
  Given "abcabcbb", the answer is "abc", which the length is 3.
  Given "bbbbb", the answer is "b", with the length of 1.
  Given "pwwkew", the answer is "wke", with the length of 3.
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/*
Input: string
Output: number
Constraints: none
Edge Cases: empty string (0), all repeated characters (1)

Data structures:
  longest - length of longest substring considered so far
  current counter - length of current test substring
  set - keep track of characters already seen
  current character index - tracks how far along string we have processed the string

Algorithm:
  Iterate through characters of string, char = s[0]...s[length-1]
    If char not already in set, add to set and increment current counter
    If char already in set,
      set longest to max(current, longest)
      repeat while removed char is not the same as current char:
        remove first char of test substring from set and decrement current counter
  Return length

Time complexity: O(n)
Space complexity: O(n), set contains all chars in string if no repeat

Submitted: Dec 12, 2017 (80.41%)
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longestLength = 0;
  let currentLength = 0;
  const charSet = new Set();

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (!charSet.has(currentChar)) {
      charSet.add(currentChar);
      currentLength++;
    } else {
      longestLength = Math.max(currentLength, longestLength);
      while (currentLength > 0) {
        const firstChar = s[i - currentLength];
        charSet.delete(firstChar);
        currentLength--;
        if (firstChar === currentChar) {
          charSet.add(currentChar);
          currentLength++;
          break;
        }
      }
    }
  }

  return Math.max(currentLength, longestLength);
};


console.log(lengthOfLongestSubstring('abcabcbb'));  // => 3
console.log(lengthOfLongestSubstring('bbbbb'));  // => 1
console.log(lengthOfLongestSubstring('bbbbab'));  // => 2
console.log(lengthOfLongestSubstring('pwwkew'));  // => 3
console.log(lengthOfLongestSubstring('dvdf'));  // => 3
console.log(lengthOfLongestSubstring(''));  // => 0
console.log(lengthOfLongestSubstring(' '));  // => 1
console.log(lengthOfLongestSubstring('   '));  // => 1
console.log(lengthOfLongestSubstring(' abc  '));  // => 4

/* Given two strings, determine if A is a substring of B.
isSubstring('f2co', 'af2co') // => true
isSubstring('abc', 'abdc') // => false
isSubstring('ab', 'a') // => false

Inputs: two strings
Outputs: boolean
Constraints: don't use String.prototype.indexOf()
Edge cases:
*/

const isSubstring = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str1.length > str2.length) return false;

  for (let i = 0; i <= str2.length - str1.length; i++) {
    if (str2[i] === str1[0]) {
      let isMatch = true;
      for (let j = 1; j < str1.length; j++) {
        if (str1[j] !== str2[i+j]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) return true;
    }
  }
  return false;
};

console.log(isSubstring('f2co', 'af2co')); // => true
console.log(isSubstring('abc', 'abdc')); // => false
console.log(isSubstring('ab', 'a')); // => false

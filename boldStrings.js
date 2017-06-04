// assumes input string does not already have markup
function boldStrings(input, substrings) {
  var currentIndex = 0;
  var closeBoldIndex = -1;
  var output = '';
  
  //console.log('DEBUG: input: ' + input);
  while (currentIndex < input.length) {
    //console.log('DEBUG: currentIndex: ' + currentIndex);
    for (var i = 0; i < substrings.length; i++) {
      //console.log('DEBUG: substrings[' + i + ']: ' + substrings[i]);
      if (input.substr(currentIndex, substrings[i].length) !== substrings[i]) {
        //console.log('DEBUG: substring not found!');
        continue;
      }
      //console.log('DEBUG: substring found! closeBoldIndex: ' + closeBoldIndex);
      if (closeBoldIndex < 0) {
        output += '<b>';
        //console.log('DEBUG: Opening bold tag');
      }
      closeBoldIndex = Math.max(closeBoldIndex, currentIndex + substrings[i].length);
      //console.log('DEBUG: closeBoldIndex: ' + closeBoldIndex);
    }  
    
    if (closeBoldIndex == currentIndex) {
      output += '</b>';
      //console.log('DEBUG: Closing bold tag');
      closeBoldIndex = -1;
    }
    output += input[currentIndex];
    currentIndex++;
    //console.log('DEBUG: output: ' + output);
  }
  if (closeBoldIndex > -1) {
    output += '</b>';
  }
  return output;
}

console.log('Expected: aabbcc\n  Actual: ' + boldStrings('aabbcc', ['z']));
console.log('-------');

console.log('Expected: a<b>abbc</b>c\n  Actual: ' + boldStrings('aabbcc', ['abbc']));
console.log('-------');

console.log('Expected: <b>aa</b>bb<b>cc</b>\n  Actual: ' + boldStrings('aabbcc', ['aa','cc']));
console.log('-------');

console.log('Expected: <b>aaa</b>bbcc\n  Actual: ' + boldStrings('aaabbcc', ['aa']));
console.log('-------');

console.log('Expected: <b>aabb</b>cc\n  Actual: ' + boldStrings('aabbcc', ['aa','abb']));
console.log('-------');

console.log('Expected: <b>aa</b>bb<b>aa</b>\n  Actual: ' + boldStrings('aabbaa', ['aa']));
console.log('-------');

console.log('Expected: <b>aab</b>b<b>cc</b>\n  Actual: ' + boldStrings('aabbcc', ['aa', 'ab', 'cc']));
console.log('-------');

console.log('Expected: <b>aab</b>bcc<b>ddee</b>\n  Actual: ' + boldStrings('aabbccddee', ['aa', 'ab', 'd', 'e']));
console.log('-------');

console.log('Expected: <b>aab</b>bcc<b>ddee</b>fff<b>ab</b>c<b>d</b>\n  Actual: ' + boldStrings('aabbccddeefffabcd', ['aa', 'ab', 'd', 'e']));

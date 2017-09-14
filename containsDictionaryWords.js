/* Given a dictionary or words and an input string of letters without spaces,
/* segment the input string into words. For example, dictionary =
/* ['a', 'the', 'bee', 'loves', 'tacos'] and inputString = 'thebeelovesthebeeandtacos';
/* expected output should be something like ['the', 'bee', 'loves', 'the', bee',
/* 'and', 'tacos']
*/

/* input: array and string
/* output: array of strings
/* constraints: none
/* edge cases: what if there are character sequences in input string that are not
/* in the dictionary? Will proceed with skipping those characters
/* output empty array if the string is empty or if there are no dictionary words in string
*/

const segment = function(inputString, dictionary) {
  const segmentedString = [];
  const dictionaryObj = {};

  // O(dictionary length)
  dictionary.forEach(word => {
    if (dictionaryObj.hasOwnProperty(word[0])) {
      dictionaryObj[word[0]].push(word);
    } else {
      dictionaryObj[word[0]] = [word];
    }
  });

  // O(string length * dictionary length)
  let i = 0;
  while (i < inputString.length) {
    if (dictionaryObj.hasOwnProperty(inputString[i])) {
      const wordList = dictionaryObj[inputString[i]];
      const possibleMatches = [];
      for (let j = 0; j < wordList.length; j++) {
        if (wordList[j] === inputString.substr(i, wordList[j].length)) {
          possibleMatches.push(wordList[j]);
        }
      }
      if (possibleMatches.length > 1) {
        const match = possibleMatches.reduce((longestMatch, match) => {
          longestMatch = match.length > longestMatch.length ? match : longestMatch;
          return longestMatch;
        },'');
        segmentedString.push(match);
        i = i + match.length;
      } else if (possibleMatches.length === 1) {
        segmentedString.push(possibleMatches[0]);
        i = i + possibleMatches[0].length;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }

  return segmentedString;
};

///* Testing
let dict = ['a', 'the', 'bee', 'loves', 'and', 'tacos'];
let inputString = 'thebeelovesthebeeandtacos';

// expect ["the","bee","loves","the","bee","and","tacos"]
console.log(JSON.stringify(segment(inputString, dict)));

inputString = '1234567890';
// expect []
console.log(JSON.stringify(segment(inputString, dict)));

inputString = '';
// expect []
console.log(JSON.stringify(segment(inputString, dict)));

dict = ['a', 'the', 'bee', 'loves', 'and', 'tacos', 'beel'];
inputString = 'thebeelovesthebeeandtacos';
// expect ["the","beel","the","bee","and","tacos"]
console.log(JSON.stringify(segment(inputString, dict)));

dict = ['a', 'the', 'bee', 'loves', 'and', 'tacos'];
inputString = 'thebeelovesthebeeandbobatacos';
// expect ["the","bee","loves","the","bee","and", "a","tacos"]
console.log(JSON.stringify(segment(inputString, dict)));
//*/

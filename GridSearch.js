/*----------------------------------------------------------
A solution to the "Grid Search" exercise found on Hacker
Rank (https://www.hackerrank.com/challenges/the-grid-search).
----------------------------------------------------------*/

function gridSearch() {
	var inputs = parseUserInput();
	//console.log(inputs);
	
	for (T = 0; T < inputs.length; T++) {
		var gridRows = inputs[T].gridRows;
		var grid = inputs[T].grid;
		var patternRows = inputs[T].patternRows;
		var patternCols = inputs[T].patternCols;
		var pattern = inputs[T].pattern;

		var hasPattern = false;
		for (R = 0; R <= gridRows - patternRows; R++) {
			var colIndex = grid[R].indexOf(pattern[0]);
			if (colIndex !== -1) {
				hasPattern = true;
				for (r = 1; r < patternRows; r++) {
					if (grid[R+r].substr(colIndex, patternCols) !== pattern[r]) {
						hasPattern = false;
						break;
					}
				}
			}
		}
		printResult(T, hasPattern);	
	}
	
}

// Parses user input coming from a textarea form control with id 'userInput'
// Stores each test case as an object in an array of objects, where each test case
// is comprised of the grid, the pattern being sought and the respective row and 
// column numbers.
function parseUserInput() {
	var input = document.getElementById('userInput').value.split(/\s+/);
	var numCases = parseInt(input.shift(), 10);
	
	var testCaseArray = [];
	for (i = 0; i < numCases; i++) {
		testCaseArray[i] = {};
		testCaseArray[i].gridRows = parseInt(input.shift(), 10);
		testCaseArray[i].gridCols = parseInt(input.shift(), 10)
		testCaseArray[i].grid = [];
		for (gRow = 0; gRow < testCaseArray[i].gridRows; gRow++) {
			testCaseArray[i].grid[gRow] = input.shift();
		}
		testCaseArray[i].patternRows = parseInt(input.shift(), 10);
		testCaseArray[i].patternCols = parseInt(input.shift(), 10);
		testCaseArray[i].pattern = [];
		for (pRow = 0; pRow < testCaseArray[i].patternRows; pRow++) {
			testCaseArray[i].pattern[pRow] = input.shift();
		}
	}	
	return testCaseArray;
}

// Displays result by adding to a list item to the div with id 'results'
function printResult(testCaseNum, foundPattern) {	
	var node = document.createElement('LI');
	if (foundPattern) {
		var textnode = document.createTextNode("Test Case " + testCaseNum + ": YES");
	} else {
		var textnode = document.createTextNode("Test Case " + testCaseNum + ": NO");
	}
	node.appendChild(textnode);
	document.getElementById('results').appendChild(node);
}

// Intended to support clearing old results on the page before printing new ones
function clearOldResults() {
	var resultArea = document.getElementById('results');
	while (resultArea.hasChildNodes()) {
		resultArea.removeChild(resultArea.firstChild);
	}
}

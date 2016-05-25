/*-------------------------------------------------------------
A solution to the "Utopian Tree" exercise found on Hacker Rank
(https://www.hackerrank.com/challenges/utopian-tree). 
--------------------------------------------------------------*/

function calculateTreeHeights() {
	var inputs = parseUserInput();
	
	for (tree = 0; tree < inputs.cases; tree++) {
		var treeHeight = 1;
		for (cycle = 1; cycle <= inputs.cycles[tree]; cycle++) {
			if (cycle % 2 === 1) {
				treeHeight *= 2;
			} else {
				treeHeight += 1;
			}
		}
		printResult(inputs.cycles[tree], treeHeight);
	}	
}

// Parses user input coming from a textarea form control with id 'userInput'
// Notable feedback from original implementation: 
//    * messy substring manipulations can be avoided with existing methods (in this case, array)
//    * probably good idea to take care of all parseInt() needs in an input parsing function if I am going to have one anyway 
function parseUserInput() {
	var input = document.getElementById('userInput').value.split(/\s+/);
	var numCases = parseInt(input.shift(), 10);
	var cycles = input.map(function(e) { return parseInt(e, 10); });
	
	return {cases: numCases, cycles: cycles};
}

// Displays result by adding to a list item to the div with id 'results'
// TO DO: clearing old results before writing new results
function printResult(cycles, height) {
	var node = document.createElement('LI');
	if (cycles === 1) {
		var textnode = document.createTextNode("After " + cycles + " growth cycle, the tree's height is " + height + ".");
	} else {
		var textnode = document.createTextNode("After " + cycles + " growth cycle(s), the tree's height is " + height + ".");
	}
	node.appendChild(textnode);
	document.getElementById('results').appendChild(node);
}

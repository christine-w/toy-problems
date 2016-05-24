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

function parseUserInput() {
	//console.log('Reading user input from text area');
	var input = document.getElementById('userInput').value.split(/\s+/);
	var numCases = parseInt(input.shift(), 10);
	var cycles = input.map(function(e) { return parseInt(e, 10); });
	
	//console.log('input: ' + input);
	//console.log('cases: ' + numCases);
	//console.log('cycles: ' + cycles);
	
	return {cases: numCases, cycles: cycles};
}

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

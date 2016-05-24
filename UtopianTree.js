function calculateTreeHeights() {
	var inputs = parseUserInput();
	
	for (tree = 0; tree < inputs.cases; tree++) {
		var treeHeight = 1;
		var numCycles = parseInt(inputs.cycles[tree]);
		if (numCycles !== 0) {
			for (cycle = 1; cycle <= numCycles; cycle++) {
				if (cycle % 2 === 1) {
					treeHeight *= 2;
				} else {
					treeHeight += 1;
				}
			}
		}
		printResult(numCycles, treeHeight);
	}	
}

function parseUserInput() {
	//console.log('Reading user input from text area');
	var input = document.getElementById('userInput').value;
	input = input.replace(/\s/g, " ");	
	var numCases = parseInt(input.substr(0, input.indexOf(" ") + 1).trim());
	var numCycles = input.substr(input.indexOf(" ") + 1).split(" "); 
	
	//console.log('input: ' + input);
	//console.log('cases: ' + numCases);
	//console.log(numCycles);
	
	return {cases: numCases, cycles: numCycles};
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
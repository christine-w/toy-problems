function cutSticks() {
	var inputs = parseUserInput();
	
	var sortedSticks = new MinSortedList();
	for (stick = 0; stick < parseInt(inputs.numSticks); stick++) {
		var stickLength = parseInt(inputs.lengths[stick]);
		sortedSticks.insert(stickLength);
	}
	
	//sortedSticks.printList();
	
	while (sortedSticks.top() != null) {
		//console.log(sortedSticks.top());
		var numCuts = cut(sortedSticks);
		printResult(numCuts);
	}
}

function parseUserInput() {
	//console.log('Reading user input from text area');
	var input = document.getElementById('userInput').value;
	input = input.replace(/\s/g, " ");	
	var numSticks = parseInt(input.substr(0, input.indexOf(" ") + 1).trim());
	var stickLengths = input.substr(input.indexOf(" ") + 1).split(" "); 
	
	//console.log('input: ' + input);
	//console.log('cases: ' + numSticks);
	//console.log(stickLengths);
	
	return {numSticks: numSticks, lengths: stickLengths};
}

function ListItem(value) {
	this.value = value;
	this.next = null;
}

function MinSortedList() {
	this.head = null;
	
	this.insert = function(value) {
		var newListItem = new ListItem(value);
		
		if (this.head === null) {
			//console.log("start list");
			this.head = newListItem;
		} else {
			var previousItem = null;
			var currentItem = this.head;
			while (currentItem !== null) {
				if (newListItem.value <= currentItem.value) {
					//console.log("smaller or equal, add to beginning");
					newListItem.next = currentItem;
					if (previousItem === null) {
						this.head = newListItem;
					} else {
						previousItem.next = newListItem;
					}
					return;
				}
				//console.log("larger, keep looking");
				previousItem = currentItem;
				currentItem = currentItem.next;
			} 
			//console.log("add to end");
			previousItem.next = newListItem;
		}
	};
	
	this.top = function() {
		if (this.head === null) {
			return null;
		} else {
			return this.head.value;
		}
	};
	
	this.pop = function() {
		if (this.head === null) {
			return 0;
		} else {
			var topItem = this.head;
			this.head = topItem.next;
			return topItem.value;
		}
	};
	
	// for debugging
	this.printList = function() {
		if (this.head !== null) {
			var currentItem = this.head;
			while (currentItem !== null) {
				console.log(currentItem.value);
				currentItem = currentItem.next;
			}
		}
	};
}

function cut(sortedSticks) {
	//console.log(sortedSticks.top());
	
	var cutLength = sortedSticks.pop();
	if (cutLength === 0) {
		return 0;
	}
	var numCuts = 1;
	
	var currentItem = sortedSticks.head;
	while (currentItem !== null) {
		if (currentItem.value === cutLength) {
			currentItem = currentItem.next;
			sortedSticks.pop();
		} else {
			currentItem.value -= cutLength;
			currentItem = currentItem.next;
		}
		numCuts += 1;
	} 
	return numCuts;
}

function printResult(numCuts) {
	var node = document.createElement('LI');
	var textnode = document.createTextNode(numCuts + " sticks were cut.");
	node.appendChild(textnode);
	document.getElementById('results').appendChild(node);
}
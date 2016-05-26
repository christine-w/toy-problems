/*----------------------------------------------------------
A solution to the "Cut the Sticks" exercise found on Hacker
Rank (https://www.hackerrank.com/challenges/cut-the-sticks).

This version uses a sorted linked list.
----------------------------------------------------------*/

function cutSticks() {
	var inputs = parseUserInput();
	
	
	// add stick lengths to a sorted list
	var sortedSticks = new MinSortedList();
	for (stick = 0; stick < inputs.numSticks; stick++) {
		sortedSticks.add(inputs.lengths[stick]);
	}
	
	// sortedSticks.printList();
	
	// cut all remaining sticks by the shortest stick length until there are no more sticks
	while (sortedSticks.top() != null) {
		var numCuts = cut(sortedSticks);
		printResult(numCuts);
	}
}

// Parses user input coming from a textarea form control with id 'userInput'
function parseUserInput() {
	var input = document.getElementById('userInput').value.split(/\s+/);
	var numSticks = parseInt(input.shift(), 10);	
	var stickLengths = input.map(function(e) {return parseInt(e, 10);}); 
	
	return {numSticks: numSticks, lengths: stickLengths};
}

// cut all sticks in the "sortedSticks" list by the shortest stick length
function cut(sortedSticks) {
	var cutLength = sortedSticks.pop();
	if (cutLength === 0) {
		return 0;
	}
	var numCuts = 1;
	
	var currentItem = sortedSticks.head;
	while (currentItem !== null) {
		if (currentItem.value === cutLength) {
			sortedSticks.pop();
		} else {
			currentItem.value -= cutLength;
		}
		currentItem = currentItem.next;
		numCuts += 1;
	} 
	return numCuts;
}

// Displays result by adding to a list item to the div with id 'results'
function printResult(numCuts) {	
	var node = document.createElement('LI');
	if (numCuts === 1) {
		var textnode = document.createTextNode(numCuts + " stick was cut.");
	} else {
		var textnode = document.createTextNode(numCuts + " sticks were cut.");
	}
	node.appendChild(textnode);
	document.getElementById('results').appendChild(node);
}

//--- begin Sorted linked list implementation ---//

function ListItem(value) {
	this.value = value;
	this.next = null;
}

function MinSortedList() {
	this.head = null;
	
	this.add = function(value) {
		var newListItem = new ListItem(value);
		
		if (this.head === null) {
			this.head = newListItem;
		} else {
			var currentItem = this.head;
			if (newListItem.value <= currentItem.value) {
				newListItem.next = this.head;
				this.head = newListItem;
			} else {
				while (currentItem.next !== null) {
					if (newListItem.value <= currentItem.next.value) {
						newListItem.next = currentItem.next;
						currentItem.next = newListItem;
						return;
					}
					currentItem = currentItem.next;
				}
				currentItem.next = newListItem;
			}
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
			var topItemValue = this.head.value;
			this.head = this.head.next;
			return topItemValue;
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
//--- end Sorted linked list implementation ---//

// Intended to support clearing old results on the page before printing new ones
function clearOldResults() {
	var resultArea = document.getElementById('results');
	while (resultArea.hasChildNodes()) {
		resultArea.removeChild(resultArea.firstChild);
	}
}

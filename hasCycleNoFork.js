
const hasCycleNoFork = function(node) {
  // traverse the graph with two trackers:
  // 1) tracker one visits each node
  // 2) tracker two visits every other node
  let tracker1 = node.next;
  let tracker2 = tracker1 ? tracker1.next : null;

  while (tracker1 && tracker2) {
    if (tracker1 === tracker2) {
      return true;
    }
    tracker1 = tracker1.next;
    tracker2 = tracker2.next ? tracker2.next.next : null;
  }

  return false;
};

// non-forking graphs
// O(n^2) time complexity and O(n) space complexity
/*
const hasCycleNoFork = function(node, alreadyVisited = []) {
  if (alreadyVisited.includes(node)) {
    return true;
  }
  alreadyVisited.push(node);
  if (node.next) {
    return hasCycleNoFork(node.next, alreadyVisited);
  }
  return false;
};
//*/

class graphNode {
  constructor() {
    this.next = null;
  }
}

const nodeA = new graphNode();
console.log(hasCycleNoFork(nodeA)); // => false

const nodeB = new graphNode();
nodeA.next = nodeB;
console.log(hasCycleNoFork(nodeA)); // => false

const nodeC = new graphNode();
nodeB.next = nodeC;
console.log(hasCycleNoFork(nodeA)); // => false

const nodeD = new graphNode();
nodeC.next = nodeD;
console.log(hasCycleNoFork(nodeA)); // => false

const nodeE = new graphNode();
nodeD.next = nodeE;
console.log(hasCycleNoFork(nodeA)); // => false

nodeE.next = nodeC;
console.log(hasCycleNoFork(nodeA)); // => true

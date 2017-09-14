/*
Input: Tree
Output: Array of elements in breadth-first order
Constraints: none
Edge Cases: none

Goal: Traverse the tree in breadth-first order

Explanation: Start at the root of the tree, output the value of each child to
a results array. In left-to-right order of the child nodes, output the value of
each of their children to the results array. The resulting array enumerates the
values of the tree in breadth-first order.

For example,
  const root = new Tree(1);
  const branch1 = root.addChild(2);
  const branch2 = root.addChild(3);
  const branch3 = branch1.addChild(4);
  const branch4 = branch2.addChild(5);
  const branch5 = branch2.addChild(6);
  const branch6 = branch3.addChild(7);
  const branch7 = branch3.addChild(8);
  const branch8 = branch3.addChild(9);
  const branch9 = branch5.addChild(10);
  BFTravese(root); => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Pseudocode:
  Results array starts off empty
  Loop through each level
    All the nodes in the current level available in an array
    Collect values of all the nodes at the current level in an array
    Return collected values, which are appended to results of the previous level
    End loop when current level nodes array is empty
  Return results array
*/

const BFTraverse = function(nodes) {
  const resultsArray = [];
  const childrenNodes = [];

  // base case (i.e., end of loop): no nodes at the current level
  if (nodes.length === 0) {
    return [];
  }

  // collect values of current level
  nodes.forEach(node => resultsArray.push(node.value));

  // identify nodes in the next level down
  nodes.forEach(node => childrenNodes.push(...node.children));

  // append results from levels below
  resultsArray.push(...BFTraverse(childrenNodes));

  return resultsArray;
}

/**
 * Code to create tree and add nodes
 */
var Tree = function(value) {
  this.value = value;
  this.children = [];
  this.depth = 0;
};

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
    child.depth = this.depth + 1;
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
    child.depth = this.depth + 1;
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

// Testing
/*
let root = new Tree(1);
let branch1 = root.addChild(2);
let branch2 = root.addChild(3);
let branch3 = branch1.addChild(4);
let branch4 = branch2.addChild(5);
let branch5 = branch2.addChild(6);
let branch6 = branch3.addChild(7);
let branch7 = branch3.addChild(8);
let branch8 = branch3.addChild(9);
let branch9 = branch5.addChild(10);
console.log(BFTraverse([root])); //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

root = new Tree(1);
branch1 = root.addChild(2);
branch2 = root.addChild(7);
branch3 = branch1.addChild(3);
branch4 = branch2.addChild(8);
branch5 = branch2.addChild(9);
branch6 = branch3.addChild(4);
branch7 = branch3.addChild(5);
branch8 = branch3.addChild(6);
branch9 = branch5.addChild(10);
console.log(BFTraverse([root])); //=> [1, 2, 7, 3, 8, 9, 4, 5, 6, 10];
//*/

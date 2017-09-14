/*
You are given a binary tree whose nodes all have integer values (both positive
and negative).

Determine which level of the tree is the "largest", i.e., you sum all the node
values at that level, and determine which level has the largest sum.

In the case of a tie, return the level closest to the root.

Input: binary tree
Output integer (level) -- assume root is level 0 and next level down is 1, etc
Constraints: none
Edge cases: tie -> return level closer to the root

Strategy:
  * Create an intermediate array that is indexed by the depth/level of the tree
    ** Each element in the array is the sum of the nodes at that level
  * Traverse tree and invoke a callback at each node which adds the value to
    the index corresponding to its depth in the array
  * Iterate over the array to find the largest sum and return the smallest index
    that matches that criterion
  * The solution will include implementing a binary tree (which will happen to
    be a binary search tree)

*/
const findLargestLevel = function(node) {
  // intermediate array for storing sums at each tree level
  const levelSums = addToLevelSums(node, 0, []);
  console.log(levelSums);
  let largestSum;
  let largestSumIndex = 0;
  levelSums.forEach( (sum, index) => {
    if (!largestSum || sum > largestSum) {
      largestSum = sum;
      largestSumIndex = index;
    }
  });

  return largestSumIndex;
};

const addToLevelSums = function(node, depth, levelSums) {
  levelSums[depth] = levelSums[depth] ? levelSums[depth] += node.value : node.value;

  if (node.left) {
    addToLevelSums(node.left, depth + 1, levelSums);
  }

  if (node.right) {
    addToLevelSums(node.right, depth + 1, levelSums);
  }

  return levelSums;
};

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new BinaryTree(value);
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new BinaryTree(value);
      }
    }
  }
}

///* Create Binary Tree
var root = new BinaryTree(5);
root.add(2);
root.add(7);
root.add(1);
root.add(3);
root.add(6);
root.add(9);
root.add(0);
console.log(root);
console.log(findLargestLevel(root));

var root = new BinaryTree(5);
root.add(2);
root.add(7);
root.add(1);
root.add(3);
root.add(6);
root.add(9);
root.add(0);
root.add(19);
console.log(root);
console.log(findLargestLevel(root));

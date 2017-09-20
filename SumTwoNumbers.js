/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/*
Input: two linked lists
Output: one linked list
Constraints: non-negative numbers in each node
Edge Cases: different length numbers, carryover resulting in an output longer than
either input linked list
Assumptions: No leading zeroes
Should not matter: lengths of input linked list -- in general and relative

Goal/Justification: Add two numbers provided in linked list representation and
provide sum in a linked list representation.

Explanation: Each number in the input is stored in a linked list with each node
containing a digit and in reverse order, i.e., 342 is represented as 2 -> 4 -> 3.
The value of each node in the sum is determined by:
  adding the values in the nodes of each input list that match in ordinality,
  adding the carryover value that starts at zero at the left most node
  the node in the sum is equal to the ones digit of the sum above
  the new value of the carryover is determined by taking modulo 10

Verification:
  (2 -> 4 -> 3) + (5 -> 6 -> 4) => (7 -> 0 -> 8)
  (2 -> 4) + (5 -> 6 -> 4) => (7 -> 0 -> 5)
  (2 -> 4 -> 3) + (5 -> 1 -> 7) => (7 -> 5 -> 0 -> 10)
  (2 -> 4 -> 3) + (5 -> 6 -> 6)  => (7 -> 0 -> 0 -> 1)

Approximation: pseudocode inline
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let list1 = l1;
  let list2 = l2;
  // track a carryover value; initialize to zero
  let sumList = null;
  let currentSumDigit = null;
  let carryover = 0;
  // iterate through the two lists at the same time
  // stop iterating both lists have been completely traversed and there is no carryover
  while (list1 || list2 || carryover) {
    let list1Value = list1 ? list1.value : 0;
    let list2Value = list2 ? list2.value : 0;
    // add the values of the two nodes, if available, and the carryover
    let digitSum = list1Value + list2Value + carryover;
    // create new node with digitSum - 10 and add to sum list
    let newSumDigit = new ListNode(digitSum % 10);
    if (!sumList) {
      sumList = newSumDigit;
      currentSumDigit = newSumDigit;
    } else {
      currentSumDigit.next = newSumDigit;
      currentSumDigit = currentSumDigit.next;
    }
    // update carryover with 1 if digitSum > 9
    carryover = (digitSum - (digitSum % 10))/10;
    list1 = list1 ? list1.next : null;
    list2 = list2 ? list2.next : null;
  }
  return sumList;
};

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// (2 -> 4 -> 3) + (5 -> 6 -> 4) => (7 -> 0 -> 8)
var list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);
var list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);
console.log(addTwoNumbers(list1, list2));

// (2 -> 4) + (5 -> 6 -> 4) => (7 -> 0 -> 5)
var list3 = new ListNode(2);
list3.next = new ListNode(4);
var list4 = new ListNode(5);
list4.next = new ListNode(6);
list4.next.next = new ListNode(4);
console.log(addTwoNumbers(list3, list4));

// (2 -> 4 -> 3) + (5 -> 1 -> 7) => (7 -> 5 -> 0 -> 1)
var list5 = new ListNode(2);
list5.next = new ListNode(4);
list5.next.next = new ListNode(3);
var list6 = new ListNode(5);
list6.next = new ListNode(1);
list6.next.next = new ListNode(7);
console.log(addTwoNumbers(list5, list6));

// (2 -> 4 -> 3) + (5 -> 6 -> 6)  => (7 -> 0 -> 0 -> 1)
var list7 = new ListNode(2);
list7.next = new ListNode(4);
list7.next.next = new ListNode(3);
var list8 = new ListNode(5);
list8.next = new ListNode(6);
list8.next.next = new ListNode(6);
console.log(addTwoNumbers(list7, list8));

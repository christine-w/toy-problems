/* August 31, 2017
/* Implement a queue with 2 stacks. Your queue should have an enqueue and a
/* dequeue function and it should be "first in first out" (FIFO)
/*
/* Optimize for the time cost of m function calls on your queue. These can be
/* any mis of enqueue and dequeue calls.
/*
/* Assume you already have a stack implementation and it gives O(1) time push
/* and pop.

/* Notes:
/* - Stacks are LIFO
/* - Using two stacks, we want to provide queue functionality, specifically:
/*   - enqueue items, and they need to be properly inserted (i.e., exist in the queue)
/*   - dequeue items, where items are dequeued in the same order they were inserted
/*   - Example: enqueue 1 - 2 - 3; three dequeues should yield 1 - 2 - 3
/*   - Example: enqueue 1 - 2; dequeue gives 1; enqueue 3; dequeue gives 2
/* - Solution overview:
/*   - Denote one stack as the inbound/enqueue stack and the other as the
/*     outbound/dequeue stack
/*   - This approach provides O(1) for enqueue and worst case O(n) for dequeue
/*     (with respect to n, which is the number of items already in the queue).
/*   - When we enqueue, we push the new item to the inbound stack stack
/*   - When we dequeue, we pop from the outbound stack. If the outbound stack
/*     is empty (e.g., first dequeue), we transfer the items from the inbound stack to the
/*     outbound stack. Since items are popped off the stack in a LIFO manner,
/*     the last item to be pushed to the outbound stack would be the oldest item
/*     that was enqueued (or pushed to the inbound stack). Transfers from the
/*     inbound stack to the outbound stack do not happen if the outbound stack is not
/*     empty because we do not want to lose the ability to dequeue the oldest item,
/*     which requires keeping it at the top of the outbound stack.
*/

class LinkedList {
  constructor() {
    this.head = null;
  }

  pop() {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  push(value) {
    const newNode = new LinkedListNode(value);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class TwoStackQueue {
  constructor() {
    this.inbound = new LinkedList();
    this.outbound = new LinkedList();
  }

  enqueue(value) {
    this.inbound.push(value);
  }

  dequeue() {
    if (this.outbound.head) {
      return this.outbound.pop();
    }
    while (this.inbound.head) {
      this.outbound.push(this.inbound.pop());
    }
    return this.outbound.pop();
  }
}

/* Testing */
const queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());  // expect 1
console.log(queue.dequeue());  // expect 2
console.log(queue.dequeue());  // expect 3
console.log('-------'); 
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());  // expect 1
queue.enqueue(3);
console.log(queue.dequeue());  // expect 2
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());  // expect 3
console.log(queue.dequeue());  // expect 4
console.log(queue.dequeue());  // expect 5

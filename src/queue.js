const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let newNode = new ListNode(value);

    let currNode = this.queue;

    if(!this.queue) {
      this.queue = newNode;
    } else {
      while(currNode.next !== null) {
        currNode = currNode.next;
      }
        currNode.next = newNode;
    }
  }

  dequeue() {
    if (!this.queue) {
      return null;
    }
    const del = this.queue.value;
    this.queue = this.queue.next;
    return del;
  }
}

// const queue = new Queue();

//     queue.enqueue(5);
//     queue.enqueue(6);
//     queue.enqueue(10);
//     queue.enqueue(11);
//     queue.enqueue(12);
//     queue.enqueue(13);
//     queue.enqueue(15);
//     queue.enqueue(17);
//     queue.enqueue(18);
//     queue.enqueue(19);
//     queue.enqueue(20);
//     // queue.dequeue()
//     console.log(
//       JSON.stringify(queue.getUnderlyingList())
//       );


module.exports = {
  Queue
};

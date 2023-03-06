const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }

// function find(list, data) {
//   if (list === null) {
//     return list;
//   } else if (list.value === data) {
//     return true;
//   } else {
//     return find(list.next, data);
//   }
// }

// const arr = convertArrayToList([3, 1, 2, 3, 4, 5]);

// console.log(
//   find(arr, 10)
// );


/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l.value === k) {
    l = l.next;
  }
  let currNode = l;
  if (currNode != null) {
    while(currNode.next) {
      if (currNode.next.value === k) {
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }
  }
  return l;
}

// const arr = convertArrayToList([3, 1, 2, 3, 4, 5, 3]);

// console.log(
//   removeKFromList(arr, 3)
// );

module.exports = {
  removeKFromList
};



const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNewNode(this.rootNode, newNode);
    }
  }

  addNewNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNewNode(node.left, newNode);
      }
    } else if (node.data < newNode.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNewNode(node.right, newNode);
      }
    } else {
      // throw new Error (`data already exists in tree`);
      return null;
    }
  }

  has(data) {
    return this.findData(this.rootNode, data);
  }

  findData(node, data) {
    if (node.data > data) {
      if (node.left === null) {
        return false;
      } else {
        return this.findData(node.left, data);
      }
    } else if (node.data < data) {
      if (node.right === null) {
        return false;
      } else {
        return this.findData(node.right, data);
      }
    } else {
      return true;
    }
  } 

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (node.data > data) {
      if (node.left === null) {
        return null;
      } else {
        return this.findNode(node.left, data);
      }
    } else if (node.data < data) {
      if (node.right === null) {
        return null;
      } else {
        return this.findNode(node.right, data);
      }
    } else {
      return node;
    }
  }

  remove(data) {
    this.rootNode = this.deleteNode(this.rootNode, data);
  }

  deleteNode(node, data) {
    if (node === null) {
      return null;
    } else if (node.data > data) {
      node.left = this.deleteNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.deleteNode(node.right, data);
      return node;
    } else { // node.data === data
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
          node = node.right;
          return node;
      } else if (node.right === null) { 
          node = node.left;
          return node;
      } else { // node.right != null && node.left != null
          node.data = this.findMinNode(node.right);
          node.right = this.deleteNode(node.right, this.findMinNode(node.right));
          return node;
      }


    }
  }

  min() {
    return this.findMinNode(this.rootNode);
  }

  findMinNode(node) {
    if (node === null) {
      return null;
    } else if (node.left === null) {
      return node.data;
    } else {
      return this.findMinNode(node.left);
    }
  }

  max() {
    return this.findMaxNode(this.rootNode);
  }

  findMaxNode(node) {
    if (node === null) {
      return null;
    } else if (node.right === null) {
      return node.data;
    } else {
      return this.findMaxNode(node.right);
    }
  }
}


// const tree = new BinarySearchTree();
// tree.add(11)
// tree.add(8)
// tree.add(12)
// tree.add(15)
// tree.add(1)
// tree.add(2)
// tree.add(4)

// console.log(tree.min());

module.exports = {
  BinarySearchTree
};


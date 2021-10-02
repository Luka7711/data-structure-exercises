// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    if (!this.head) this.head = new Node(value, null);
    else {
      let moveNode = this.head;
      this.head = new Node(value, moveNode);
    }
  }

  size() {
    let lng = 0;
    let currentNode = this.head;
    while (currentNode) {
      lng++;
      currentNode = currentNode.next;
    }
    return lng;
  }
}
// module.exports = { Node, LinkedList };

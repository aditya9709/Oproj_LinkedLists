class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }

  getTail() {
    return this.tail;
  }

  size() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  at(index) {
    if (index < 0 || index >= this.size) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  pop() {
    if (!this.head) return null;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return null;
    }

    const pointerBeforeTail = this.at(this.size - 2);
    pointerBeforeTail.next = null;
    this.tail = pointerBeforeTail;
    this.size--;
    return this.head;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (value === current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (value === current.value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {
    if (!this.head) return "null";

    let output = "";
    let current = this.head;
    while (current !== null) {
      output = `${output} ( ${current.value} ) ->`;
      current = current.next;
    }
    return `${output} null`;
  }
}

// Example usage:
const list = new LinkedList();
console.log(list.prepend(1));
console.log(list.append(2));
console.log(list.append(3));
console.log(list.append(4));
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.contains(3));
console.log(list.find(2));
console.log(list.toString());

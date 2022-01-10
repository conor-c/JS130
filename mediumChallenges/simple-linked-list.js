// Problem
// Create a singly linked list
// data is a range of numbers 1 - 1
// provide functions to reverse the linked list, and convert the linked list to and from an array
// a singly linked list is a collection of nodes that contain data and a link to the next node.

// examples / test cases
// From the test cases:
// class Element
//   constructor(dataInt, link(optional))
//    dataInt - whatever data is initialized
//    link - the link to the next element in the list
//   datum()
//    returns the data
//   isTail()
//    determines if it's the last item (based on if it has a link thats not null)
//    returns boolean
//   next()
//    returns the next element in the list
// class SimpleLinkedList
//  constructor
//    some way to store the elements?
//  size()
//    return number of Elements in the list
//  isEmpty()
//    return boolean based on size of list
//  push(data)
//    create a new Element(data)
//    this new element should be the new Head
//    link should be to the previous Head (if true)
//    should also change the head to the new pushed element
//  peak()
//    ?? Returns the data from head? null if list is empty
//  head()
//    returns the Head node(element). ?? tracked in the constructor list
//  pop()
//    removes the node(element) that is the head
//    set the new head to be what that node was linking to
//    returns the removed head
//  static fromArray(array)
//    return a instance of SimpleLinkedList constructed from the argument array
//    if arg is null, still run
//    iterate the array starting from the last element
//    ex: [1, 2, 3]
//    .push(3) // new head
//    .push(2) // new head
//    .push(1) // new head
//    1 would be the head, 3 would be the tail
//  toArray()
//    convert the linked list into an array,
//    if where the head is the first element, and the tail is the last element
//    (O(n) time)
//    return array
//  reverse()
//    since they don't need to be the same object
//    create a new simpleLinkedList
//     push the head from the old list
//      push the next link from the head (which becomes the new head)
//        continue until you reach the tail which won't have a link to another element
//        now the tail is the new head for the new list

// Data Structure
//  I believe the SimpleLinkedList should have a list property that is an object, where each property
//  is an instance of the Element class -- WRONG
//  in a linked list, the point to the next element is located in the previous element. dat is in the stack? heap?

// Algorithm -- see test cases above
"use strict";

class Element {
  constructor(data, next = null) {
    this.data = data;
    this.link = next;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.next() === null;
  }

  next() {
    return this.link;
  }
}

class SimpleLinkedList {
  constructor(head = null) {
    this.Head = head;
    this.nodes = 0;
  }

  size() {
    return this.nodes;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(data) {
    let currentHead = this.Head;
    this.Head = new Element(data, currentHead);
    this.nodes += 1;
  }

  pop() {
    let poppedElement = this.head()

    if (poppedElement === poppedElement.isTail()) {
      this.Head = null;
      this.nodes = 0;
    } else {
      this.Head = poppedElement.next();
      this.nodes -= 1;
    }

    return poppedElement.datum();
  }

  peek() {
    return this.isEmpty() ? null : this.Head.datum();
  }

  head() {
    return this.Head;
  }

  toArray() {
    // STUB
    //    convert the linked list into an array,
    //    if where the head is the first element, and the tail is the last element
    //    (O(n) time)
    //    return array
  }


 static fromArray(array) {
    //    return a instance of SimpleLinkedList constructed from the argument array
    //    if arg is null, still run
    //    iterate the array starting from the last element
    //    ex: [1, 2, 3]
    //    .push(3) // new head
    //    .push(2) // new head
    //    .push(1) // new head
    //    1 would be the head, 3 would be the tail
  }

  reverse() {
    //    since they don't need to be the same object
    //    create a new simpleLinkedList
    //     push the head from the old list
    //      push the next link from the head (which becomes the new head)
    //        continue until you reach the tail which won't have a link to another element
    //        now the tail is the new head for the new list
  }
}

module.exports = { Element, SimpleLinkedList };

let testElement1 = new Element(1);
console.log(testElement1.next())
// let testList = new SimpleLinkedList().size();
// console.log(testElement1);
// console.log(testList);

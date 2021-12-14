
// Making linked list from scratch
// let list = null;


// let node = {
//     value: 4,
//     next: null
//   }


function makeNode(value) {
    return {
      value: value,
      next: null
    }
  }

// create the nodes
let four = makeNode(4);
let three = makeNode(3);
let two = makeNode(2);
let one = makeNode(1);

// link them together
four.next = three;
three.next = two;
two.next = one;



function printList(list) {
    // Start with the first node
    let current = list;
  
    // As long as `current` isn't null, print out the value
    while(current) {
      console.log(current.value);
  
      // Advance to the next node in the list by replacing
      // current with whatever `next` points to
      current = current.next;
    }
  }


  // Recursive version of printList
  function printListRecursive(list) {
    // If this node exists, print it out
    if(list) {
      console.log(list.value)
    } else {
      // Hit the end? Stop here.
      return;
    }
  
    // Do it again for the next one
    // (eventually, list.next will be null)
    printListRecursive(list.next);
  }


  /////////////////////////////////////////////////////

  //To do most operations like inserting or traversing the linked list will
  // have to use the HEAD and TAIL concept. Traverse starting at the head and/or 
  // add an item by using tail.next. 
  // Use class constructor or functions that takes a list



  // JavaScript Linked List class 
  class List {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    append(value) {
        //Reuse the makeNode function above earlier in code
        let node = makeNode(value);
    
        // Is it currently empty?
        if(!this.tail) {
          // Head and tail are one and the same
          this.head = this.tail = node;
          return node;
        }
    
        // If it's not empty, tack this on the end,
        // and update `tail` to point at this new node
        this.tail.next = node;
        this.tail = node;
    
        // Return the node we added
        return node;
      }
    }

// Go back to Linked List article and finish studying this from bookmarks


  
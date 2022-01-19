// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode();

let reverseList = function (head) {
  let [prev, cur] = [null, head];

  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next];
  }

  return prev;
};

let output = [5, 4, 3, 2, 1]
console.log(reverseList(output))


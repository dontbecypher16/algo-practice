// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 
// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let switched = false;
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    switched = !switched
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
};

const l2_3 = new ListNode(4);
const l2_2 = new ListNode(3, l2_3);
const l2 = new ListNode(1, l2_2);

const l1_3 = new ListNode(4);
const l1_2 = new ListNode(2, l1_3);
const l1 = new ListNode(1, l1_2);

console.log(mergeTwoLists(l1, l2))
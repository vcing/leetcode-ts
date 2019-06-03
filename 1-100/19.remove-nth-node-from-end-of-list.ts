/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.66%)
 * Total Accepted:    322.4K
 * Total Submissions: 957.3K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// interface ListNode {
//   val: number
//   next: ListNode
//   prev: ListNode
// }
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head: ListNode, n: number) {
//   if (!head.next) return null
//   let i = head
//   let prev = null
//   while (i.next) {
//     prev = i
//     i = i.next
//     i.prev = prev
//   }
//   i.prev = prev
//   for (let count = 1; count < n; count++) i = i.prev
//   if (n !== 0) {
//     if (i.next) i.next.prev = i.prev
//     if (i.prev) {
//       i.prev.next = i.next
//     } else {
//       return i.next
//     }

//   }
//   return head
// };
interface ListNode {
  val: number
  next: ListNode
}

var removeNthFromEnd = function (head: ListNode, n: number) {
  const fake: ListNode = {
    val: null,
    next: head
  }
  let pointer2 = head
  for (let i = 1; i < n; i++) {
    pointer2 = pointer2.next
  }
  let pointer1 = fake
  while (pointer2 && pointer2.next) {
    pointer2 = pointer2.next
    pointer1 = pointer1.next
  }
  pointer1.next = pointer1.next.next
  return fake.next
}
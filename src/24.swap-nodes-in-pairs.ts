/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (41.83%)
 * Total Accepted:    259.6K
 * Total Submissions: 619.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * Example:
 * 
 * 
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
 * Note:
 * 
 * 
 * Your algorithm should use only constant extra space.
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
interface ListNode {
  val: number,
  next: ListNode
}
/**+
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head: ListNode) {
  const fake: ListNode = { val: null, next: head }
  let pointer = fake
  while (pointer.next && pointer.next.next) {
    const n3 = pointer.next.next.next
    const n2 = pointer.next.next
    pointer.next.next.next = pointer.next
    pointer.next.next = n3
    pointer.next = n2
    pointer = pointer.next.next
  }
  return fake.next
};

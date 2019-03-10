/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (34.28%)
 * Total Accepted:    156.3K
 * Total Submissions: 454.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and
 * return its modified list.
 * 
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes in the end should remain as it is.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * Given this linked list: 1->2->3->4->5
 * 
 * For k = 2, you should return: 2->1->4->3->5
 * 
 * For k = 3, you should return: 3->2->1->4->5
 * 
 * Note:
 * 
 * 
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be
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
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head: ListNode, k: number) {
  const dummy: ListNode = { val: null, next: head }
  let result: ListNode = dummy
  let pointer = head
  const stacks: ListNode[] = []
  for (let i = 0; pointer; i++) {
    stacks.push(pointer)
    pointer = pointer.next
    if ((i + 1) % k === 0) {
      while (stacks.length > 0) {
        result.next = stacks.pop()
        result = result.next
      }
      result.next = pointer
    }
  }
  return dummy.next
};
/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (44.30%)
 * Total Accepted:    457.3K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
  val: number
  next: ListNode
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1: ListNode, l2: ListNode) {
  const start: ListNode = { val: null, next: null }
  let pointer = start
  let l1Pointer: ListNode = l1
  let l2Pointer: ListNode = l2
  while (l1Pointer && l2Pointer) {
    if (l1Pointer.val < l2Pointer.val) {
      if (pointer !== l1Pointer) pointer.next = l1Pointer
      l1Pointer = l1Pointer.next
    } else {
      if (pointer !== l2Pointer) pointer.next = l2Pointer
      l2Pointer = l2Pointer.next
    }
    pointer = pointer.next
  }
  if (l1Pointer) pointer.next = l1Pointer
  if (l2Pointer) pointer.next = l2Pointer
  return start.next
};
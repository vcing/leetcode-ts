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
  let l1Pointer: ListNode = { val: null, next: l1 }
  let l2Pointer: ListNode = { val: null, next: l2 }
  for (let i = 1; l1Pointer.next && l2Pointer.next; i++) {
    if (l1Pointer.next.val < l2Pointer.next.val) {
      pointer.next = { val: l1Pointer.next.val, next: null }
      l1Pointer = l1Pointer.next
    } else {
      pointer.next = { val: l2Pointer.next.val, next: null }
      l2Pointer = l2Pointer.next
    }
    pointer = pointer.next
  }
  while (l1Pointer.next) {
    pointer.next = { val: l1Pointer.next.val, next: null }
    pointer = pointer.next
    l1Pointer = l1Pointer.next
  }
  while (l2Pointer.next) {
    pointer.next = { val: l2Pointer.next.val, next: null }
    pointer = pointer.next
    l2Pointer = l2Pointer.next
  }
  return start.next
};

/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (31.48%)
 * Total Accepted:    305.8K
 * Total Submissions: 967.8K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists: ListNode[]) {
//   const fake: ListNode = {
//     val: null,
//     next: null
//   }
//   let pointer = fake
//   lists = lists.filter(node => !!node)
//   while (lists.length > 0) {
//     lists.sort((a, b) => a.val - b.val)
//     pointer.next = { val: lists[0].val, next: null }
//     pointer = pointer.next
//     lists[0] = lists[0].next
//     if (!lists[0]) lists.splice(0, 1)
//   }
//   return fake.next
// };
var mergeKLists = function (lists: ListNode[]) {
  lists = lists.filter(node => !!node)
  while (lists.length > 1) lists.unshift(mergeTwoLists(lists.pop(), lists.pop()))
  return lists[0] || null
}

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
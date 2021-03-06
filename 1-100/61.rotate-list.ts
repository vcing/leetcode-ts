/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (25.87%)
 * Total Accepted:    170.9K
 * Total Submissions: 653.6K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, rotate the list to the right by k places, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head: ListNode, k: number) {
  if (!head || k === 0 || !head.next) return head
  let left = head
  let right = head
  let length
  for (let i = 0; i < k; i++) {
    if (!right.next) {
      length = i + 1
      break;
    }
    right = right.next || head
  }
  if (length) {
    for (let i = 0; i <= k % length; i++) {
      right = right.next || head
    }
  }
  if (left === right) return head
  while (right.next) {
    left = left.next
    right = right.next
  }
  const result = left.next
  left.next = null
  right.next = head
  return result
};

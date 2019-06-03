/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (29.71%)
 * Total Accepted:    670.7K
 * Total Submissions: 2.3M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1: ListNode, l2: ListNode) {
  let currentL1 = l1
  let currentL2 = l2
  let currentResult: ListNode
  let result: ListNode
  let nextPlusOne = false
  while (currentL1 || currentL2 || nextPlusOne) {
    const currentValue: number = (currentL1 && currentL1.val) + (currentL2 && currentL2.val) + Number(nextPlusOne)
    nextPlusOne = currentValue > 9
    const tempResult: ListNode = { val: currentValue % 10, next: null }
    if (currentResult) {
      currentResult.next = tempResult
    } else {
      result = tempResult
    }
    currentResult = tempResult
    currentL1 = currentL1 && currentL1.next
    currentL2 = currentL2 && currentL2.next
  }
  return result
};

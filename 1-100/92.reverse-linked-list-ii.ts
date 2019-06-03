/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (33.17%)
 * Total Accepted:    176.1K
 * Total Submissions: 520.3K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
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
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head: ListNode, m: number, n: number) {
  if (!head.next) return head
  const fake: ListNode = { val: null, next: head }
  let pointer = fake
  let before: ListNode = fake
  let after: ListNode
  let end: ListNode
  let start: ListNode
  let pprev: ListNode
  for (let i = 1; i <= n + 1; i++) {
    const prev = pointer
    pointer = pointer.next
    if (i + 1 === m) before = pointer
    if (i - 1 === n) after = pointer
    if (i === m) end = pointer
    if (i === n) start = pointer
    if (i > m && i <= n + 1) {
      if (pprev) prev.next = pprev
      pprev = prev
    }
  }

  end.next = after
  before.next = start

  return fake.next
};

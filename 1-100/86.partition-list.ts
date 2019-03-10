/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 *
 * https://leetcode.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (35.39%)
 * Total Accepted:    149.4K
 * Total Submissions: 415.5K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * Given a linked list and a value x, partition it such that all nodes less
 * than x come before nodes greater than or equal to x.
 * 
 * You should preserve the original relative order of the nodes in each of the
 * two partitions.
 * 
 * Example:
 * 
 * 
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head: ListNode, x: number) {
  const fake: ListNode = { val: null, next: head }
  let left = fake
  let right = fake.next
  while (right && right.next) {
    if (left.next.val >= x) {
      while (right.next && right.next.val >= x) right = right.next
      if (!right.next) return fake.next
      const middle = right
      while (right.next && right.next.val < x) right = right.next
      const tmp = middle.next
      middle.next = right.next
      right.next = left.next
      left.next = tmp
      left = right
      right = left.next
    } else {
      left = left.next
      right = right.next
    }
  }
  return fake.next
};

/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (38.39%)
 * Total Accepted:    175.8K
 * Total Submissions: 430.9K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given a singly linked list where elements are sorted in ascending order,
 * convert it to a height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * Example:
 * 
 * 
 * Given the sorted linked list: [-10,-3,0,5,9],
 * 
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
interface ListNode {
  val: number,
  next: ListNode
}
var sortedListToBST = function (head: ListNode): TreeNode {
  if (!head) return null
  let cursor = head
  const arr = [head.val]
  while (cursor.next) {
    arr.push(cursor.next.val)
    cursor = cursor.next
  }

  return sortedArrayToBST(arr)
};


var sortedArrayToBST = function (nums: number[]): TreeNode {
  if (nums.length === 0) return null
  const half = Math.floor(nums.length / 2)
  const n = nums.length === 1 ? 0 : half;
  return {
    val: nums[n],
    left: sortedArrayToBST(nums.slice(0, n)),
    right: sortedArrayToBST(nums.slice(n + 1))
  }
};

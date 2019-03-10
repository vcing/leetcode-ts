/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (53.51%)
 * Total Accepted:    401.9K
 * Total Submissions: 734.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Example:
 * 
 * 
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * Output: [1,3,2]
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
interface TreeNode {
  val: number,
  left: TreeNode,
  right: TreeNode
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root: TreeNode) {
  if (!root) return []
  const result: number[] = []

  const inorder = (root: TreeNode) => {
    if (root.left) inorder(root.left)
    result.push(root.val)
    if (root.right) inorder(root.right)
  }

  inorder(root)
  return result;
};

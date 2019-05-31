/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (39.73%)
 * Total Accepted:    320.9K
 * Total Submissions: 783.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 * 
 * For this problem, a height-balanced binary tree is defined as:
 * 
 * 
 * a binary tree in which the depth of the two subtrees of every node never
 * differ by more than 1.
 * 
 * 
 * Example 1:
 * 
 * Given the following tree [3,9,20,null,null,15,7]:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * Return true.
 * 
 * Example 2:
 * 
 * Given the following tree [1,2,2,3,3,null,null,4,4]:
 * 
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * Return false.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root: TreeNode) {
  let shallow = Infinity
  let deep = 0

  const traval = (node: TreeNode, depth: number) => {
    if (node.left) traval(node.left, depth + 1)
    if (node.right) traval(node.right, depth + 1)
    if (!node.left && !node.right) {
      shallow = Math.min(depth, shallow)
      deep = Math.max(depth, deep)
    }
    if (!node.left || !node.right) {
      shallow = Math.min(depth, shallow)
    }
  }

  if (root) traval(root, 0)
  else return true
  return deep - shallow <= 1
};

// https://leetcode.com/problems/balanced-binary-tree/discuss/302061/Is-there-a-bug-in-the-test-case-Is-that-an-invalid-test-case
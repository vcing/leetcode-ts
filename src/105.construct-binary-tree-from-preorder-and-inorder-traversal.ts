/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (37.98%)
 * Total Accepted:    221.8K
 * Total Submissions: 540.9K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * 
 * Return the following binary tree:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder: number[], inorder: number[]) {
  function helper(p1: number, p2: number, i1: number, i2: number) {
    if (p1 > p2 || i1 > i2) return null; // sanity check

    const value = preorder[p1]           // get the root value
    const index = inorder.indexOf(value) // get inorder position
    const nLeft = index - i1             // count nodes in left subtree
    const root: TreeNode = { val: value, left: null, right: null }    // build the root node

    // build the left and right subtrees recursively
    root.left = helper(p1 + 1, p1 + nLeft, i1, index - 1);
    root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

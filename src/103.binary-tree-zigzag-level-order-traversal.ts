/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (39.29%)
 * Total Accepted:    217.2K
 * Total Submissions: 521.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its zigzag level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 * 
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root: TreeNode) {
  if (!root) return []
  const result: number[][] = [[root.val]]
  let layer = []
  if (root.left) layer.push(root.left)
  if (root.right) layer.push(root.right)
  let nextLayer: TreeNode[] = []
  while (layer.length > 0) {
    const layerResult: number[] = []
    layer.forEach(node => {
      layerResult.push(node.val)
      if (node.left) nextLayer.push(node.left)
      if (node.right) nextLayer.push(node.right)
    })
    if (result.length % 2 !== 0) result.push(layerResult.reverse())
    else result.push(layerResult)
    layer = nextLayer
    nextLayer = []
  }
  return result
};

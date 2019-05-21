/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (41.93%)
 * Total Accepted:    364.3K
 * Total Submissions: 851.3K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 * 
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * But the following [1,2,2,null,3,null,3]  is not:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
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
  left?: TreeNode
  right?: TreeNode
}
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function (root: TreeNode) {
//   const isMirror = (left: TreeNode, right: TreeNode): boolean => {
//     if (left === null || right === null) return left === right
//     return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left)
//   }

//   return root && isMirror(root.left, root.right)
// };

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root: TreeNode) {
  if (!root) return !root
  if (!root.left || !root.right) return root.left === root.right
  let layer = [root.left, root.right]
  let nextLayer = []
  while (layer.length > 0) {
    for (let i = layer.length / 2 - 1; i >= 0; i--) {
      const j = layer.length - i - 1
      const left = layer[i]
      const right = layer[j]
      if (left && right) {
        if (left.val !== right.val) return false
        nextLayer.unshift(left.right)
        nextLayer.unshift(left.left)
        nextLayer.push(right.left)
        nextLayer.push(right.right)
      } else if (left !== right) return false
    }
    layer = nextLayer
    nextLayer = []
  }
  return true
};
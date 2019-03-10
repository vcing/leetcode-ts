/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 *
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (33.94%)
 * Total Accepted:    126.8K
 * Total Submissions: 366.2K
 * Testcase Example:  '3'
 *
 * Given an integer n, generate all structurally unique BST's (binary search
 * trees) that store values 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * Explanation:
 * The above output corresponds to the 5 unique BST's shown below:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n: number) {
  if (n === 0) return []

  const clone = (root: TreeNode, offset: number): TreeNode => {
    if (!root) {
      return null
    }
    const ret: TreeNode = { val: root.val + offset, left: null, right: null }
    ret.left = clone(root.left, offset)
    ret.right = clone(root.right, offset)
    return ret
  }

  const dp = new Array(n + 1).fill(1).map(() => [])
  dp[0].push(null)
  for (let i = 1; i <= n; i++) {
    for (let l = 0; l < i; l++) {
      const r = i - l - 1
      dp[l].forEach(left => {
        dp[r].forEach(right => {
          const root: TreeNode = { val: l + 1, left: null, right: null }
          root.left = left
          root.right = clone(right, l + 1)
          dp[i].push(root)
        })
      })
    }
  }

  return dp[n]
};

// console.log(generateTrees(5))

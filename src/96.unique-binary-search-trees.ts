/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 *
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (44.03%)
 * Total Accepted:    183.5K
 * Total Submissions: 408.4K
 * Testcase Example:  '3'
 *
 * Given n, how many structurally unique BST's (binary search trees) that store
 * values 1 ... n?
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: 5
 * Explanation:
 * Given n = 3, there are a total of 5 unique BST's:
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
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n: number): number {
  if (n === 0) return 0

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

  return dp[n].length
};

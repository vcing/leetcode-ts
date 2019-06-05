/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 *
 * https://leetcode.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (40.69%)
 * Total Accepted:    232.3K
 * Total Submissions: 570.8K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's
 * sum equals the given sum.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given the below binary tree and sum = 22,
 *
 *
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \    / \
 * 7    2  5   1
 *
 *
 * Return:
 *
 *
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    const results = [];
    const helper = (root, sum, result = []) => {
        result = [...result, root.val];
        if (root.val === sum && !root.left && !root.right)
            results.push(result);
        if (root.left)
            helper(root.left, sum - root.val, result);
        if (root.right)
            helper(root.right, sum - root.val, result);
    };
    if (root)
        helper(root, sum);
    return results;
};

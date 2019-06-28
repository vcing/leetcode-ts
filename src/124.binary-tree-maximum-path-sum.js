/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
 *
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (30.05%)
 * Total Accepted:    197.7K
 * Total Submissions: 654.9K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty binary tree, find the maximum path sum.
 *
 * For this problem, a path is defined as any sequence of nodes from some
 * starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the
 * root.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3]
 *
 * ⁠      1
 * ⁠     / \
 * ⁠    2   3
 *
 * Output: 6
 *
 *
 * Example 2:
 *
 *
 * Input: [-10,9,20,null,null,15,7]
 *
 * -10
 * / \
 * 9  20
 * /  \
 * 15   7
 *
 * Output: 42
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
 * @return {number}
 */
var maxPathSum = function (root) {
    const maxSum = (root) => {
        if (!root.left && !root.right)
            return {
                passMax: root.val,
                throughMax: root.val
            };
        const left = root.left && maxSum(root.left);
        const right = root.right && maxSum(root.right);
        const passMaxCompare = [root.val];
        if (root.left)
            passMaxCompare.push(left.passMax + root.val);
        if (root.right)
            passMaxCompare.push(right.passMax + root.val);
        const passMax = Math.max(...passMaxCompare);
        const throughMaxCompare = [];
        if (root.left)
            throughMaxCompare.push(left.throughMax, left.passMax);
        if (root.right)
            throughMaxCompare.push(right.throughMax, right.passMax);
        if (root.left && root.right)
            throughMaxCompare.push(left.passMax + right.passMax + root.val);
        const throughMax = Math.max(...throughMaxCompare);
        return { passMax, throughMax };
    };
    const result = maxSum(root);
    return Math.max(result.passMax, result.throughMax);
};

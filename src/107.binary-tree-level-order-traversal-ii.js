/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (44.58%)
 * Total Accepted:    225.7K
 * Total Submissions: 482.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
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
 * return its bottom-up level order traversal as:
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
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
var levelOrderBottom = function (root) {
    if (!root)
        return [];
    const result = [[root.val]];
    let layer = [];
    if (root.left)
        layer.push(root.left);
    if (root.right)
        layer.push(root.right);
    let nextLayer = [];
    while (layer.length > 0) {
        const layerResult = [];
        layer.forEach(node => {
            layerResult.push(node.val);
            if (node.left)
                nextLayer.push(node.left);
            if (node.right)
                nextLayer.push(node.right);
        });
        result.push(layerResult);
        layer = nextLayer;
        nextLayer = [];
    }
    return result.reverse();
};

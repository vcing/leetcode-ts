/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (45.74%)
 * Total Accepted:    374.1K
 * Total Submissions: 773.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
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
 * return its level order traversal as:
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
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
var levelOrder = function (root) {
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
    return result;
};

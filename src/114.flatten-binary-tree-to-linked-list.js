/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (42.43%)
 * Total Accepted:    238.7K
 * Total Submissions: 562K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * Given a binary tree, flatten it to a linked list in-place.
 *
 * For example, given the following tree:
 *
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \   \
 * 3   4   6
 *
 *
 * The flattened tree should look like:
 *
 *
 * 1
 * ⁠\
 * ⁠ 2
 * ⁠  \
 * ⁠   3
 * ⁠    \
 * ⁠     4
 * ⁠      \
 * ⁠       5
 * ⁠        \
 * ⁠         6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root)
        return;
    let end = root;
    if (root.right) {
        const rightFlatten = flatten(root.right);
        root.right = rightFlatten.start;
        let pointer = rightFlatten.end;
        while (pointer.right)
            pointer = pointer.right;
        end = pointer;
    }
    if (root.left) {
        const leftFlatten = flatten(root.left);
        root.left = null;
        leftFlatten.end.right = root.right;
        root.right = leftFlatten.start;
        let pointer = leftFlatten.end;
        while (pointer.right)
            pointer = pointer.right;
        end = pointer;
    }
    return { start: root, end };
};

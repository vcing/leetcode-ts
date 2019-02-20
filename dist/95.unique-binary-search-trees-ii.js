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
var generateTrees = function (n) {
    const result = [];
    const nextNode = (root, node, left) => {
        if (left.length === 0)
            result.push(root);
        let l = 0;
        let rStart = 1;
        while (left[rStart] < node.val)
            rStart++;
        while (left[l] <= node.val) {
            let r = rStart;
            if (l >= r)
                r = l + 1;
            while (r < left.length) {
                // node.right = { val: r, left: null, right: null }
            }
        }
    };
    for (let i = 1; i <= n; i++) {
        const root = { val: i, left: null, right: null };
        const left = new Array(n).fill(1).map((v, i) => i + 1);
        left.splice(i - 1, 1);
        nextNode(root, root, left);
    }
    return result;
};

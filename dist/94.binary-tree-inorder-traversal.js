/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root)
        return [];
    const result = [];
    const inorder = (root) => {
        if (root.left)
            inorder(root.left);
        result.push(root.val);
        if (root.right)
            inorder(root.right);
    };
    inorder(root);
    return result;
};

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
var isSymmetric = function (root) {
    if (!root)
        return !root;
    if (!root.left || !root.right)
        return root.left === root.right;
    let layer = [root.left, root.right];
    let nextLayer = [];
    while (layer.length > 0) {
        for (let i = layer.length / 2 - 1; i >= 0; i--) {
            const j = layer.length - i - 1;
            const left = layer[i];
            const right = layer[j];
            if (left && right) {
                if (left.val !== right.val)
                    return false;
                nextLayer.unshift(left.right);
                nextLayer.unshift(left.left);
                nextLayer.push(right.left);
                nextLayer.push(right.right);
            }
            else if (left !== right)
                return false;
        }
        layer = nextLayer;
        nextLayer = [];
    }
    return true;
};

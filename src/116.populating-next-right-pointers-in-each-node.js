var connect = function (root) {
    if (!root)
        return root;
    let level = [root];
    let nextLevel = [];
    while (level.length > 0) {
        for (let i = 0; i < level.length; i++) {
            const node = level[i];
            if (node.left && node.right)
                nextLevel.push(node.left, node.right);
            node.next = level[i + 1] || null;
        }
        level = nextLevel;
        nextLevel = [];
    }
    return root;
};

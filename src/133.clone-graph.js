var cloneGraph = function (node) {
    const map = {};
    const cloneNode = (node, copy) => {
        for (let i = 0; i < node.neighbors.length; i++) {
            const currentNode = node.neighbors[i];
            let currentMap = map[currentNode.val];
            if (!currentMap) {
                map[currentNode.val] = currentMap = { val: currentNode.val, neighbors: [] };
                cloneNode(currentNode, currentMap);
            }
            copy.neighbors.push(currentMap);
        }
    };
    const result = { val: node.val, neighbors: [] };
    map[node.val] = result;
    cloneNode(node, result);
    return result;
};

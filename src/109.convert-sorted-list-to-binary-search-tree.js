var sortedListToBST = function (head) {
    if (!head)
        return null;
    let cursor = head;
    const arr = [head.val];
    while (cursor.next) {
        arr.push(cursor.next.val);
        cursor = cursor.next;
    }
    return sortedArrayToBST(arr);
};
var sortedArrayToBST = function (nums) {
    if (nums.length === 0)
        return null;
    const half = Math.floor(nums.length / 2);
    const n = nums.length === 1 ? 0 : half;
    return {
        val: nums[n],
        left: sortedArrayToBST(nums.slice(0, n)),
        right: sortedArrayToBST(nums.slice(n + 1))
    };
};

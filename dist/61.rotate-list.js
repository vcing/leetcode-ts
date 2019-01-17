/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || k === 0 || !head.next)
        return head;
    let left = head;
    let right = head;
    let length;
    for (let i = 0; i < k; i++) {
        if (!right.next) {
            length = i + 1;
            break;
        }
        right = right.next || head;
    }
    if (length) {
        for (let i = 0; i <= k % length; i++) {
            right = right.next || head;
        }
    }
    if (left === right)
        return head;
    while (right.next) {
        left = left.next;
        right = right.next;
    }
    const result = left.next;
    left.next = null;
    right.next = head;
    return result;
};

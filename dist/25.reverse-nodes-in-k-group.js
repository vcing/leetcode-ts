/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const dummy = { val: null, next: head };
    let result = dummy;
    let pointer = head;
    const stacks = [];
    for (let i = 0; pointer; i++) {
        stacks.push(pointer);
        pointer = pointer.next;
        if ((i + 1) % k === 0) {
            while (stacks.length > 0) {
                result.next = stacks.pop();
                result = result.next;
            }
            result.next = pointer;
        }
    }
    return dummy.next;
};

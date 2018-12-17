/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const start = { val: null, next: null };
    let pointer = start;
    let l1Pointer = { val: null, next: l1 };
    let l2Pointer = { val: null, next: l2 };
    for (let i = 1; l1Pointer.next && l2Pointer.next; i++) {
        if (l1Pointer.next.val < l2Pointer.next.val) {
            pointer.next = { val: l1Pointer.next.val, next: null };
            l1Pointer = l1Pointer.next;
        }
        else {
            pointer.next = { val: l2Pointer.next.val, next: null };
            l2Pointer = l2Pointer.next;
        }
        pointer = pointer.next;
    }
    while (l1Pointer.next) {
        pointer.next = { val: l1Pointer.next.val, next: null };
        pointer = pointer.next;
        l1Pointer = l1Pointer.next;
    }
    while (l2Pointer.next) {
        pointer.next = { val: l2Pointer.next.val, next: null };
        pointer = pointer.next;
        l2Pointer = l2Pointer.next;
    }
    return start.next;
};

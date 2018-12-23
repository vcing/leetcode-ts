/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const start = { val: null, next: null };
    let pointer = start;
    let l1Pointer = l1;
    let l2Pointer = l2;
    while (l1Pointer && l2Pointer) {
        if (l1Pointer.val < l2Pointer.val) {
            if (pointer !== l1Pointer)
                pointer.next = l1Pointer;
            l1Pointer = l1Pointer.next;
        }
        else {
            if (pointer !== l2Pointer)
                pointer.next = l2Pointer;
            l2Pointer = l2Pointer.next;
        }
        pointer = pointer.next;
    }
    if (l1Pointer)
        pointer.next = l1Pointer;
    if (l2Pointer)
        pointer.next = l2Pointer;
    return start.next;
};
/**+
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const fake = { val: null, next: head };
    let pointer = fake;
    while (pointer.next && pointer.next.next) {
        const n3 = pointer.next.next.next;
        const n2 = pointer.next.next;
        pointer.next.next.next = pointer.next;
        pointer.next.next = n3;
        pointer.next = n2;
        pointer = pointer.next.next;
    }
    return fake.next;
};

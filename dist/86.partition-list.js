/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const fake = { val: null, next: head };
    let left = fake;
    let right = fake.next;
    while (right && right.next) {
        if (left.next.val >= x) {
            while (right.next && right.next.val >= x)
                right = right.next;
            if (!right.next)
                return fake.next;
            const middle = right;
            while (right.next && right.next.val < x)
                right = right.next;
            const tmp = middle.next;
            middle.next = right.next;
            right.next = left.next;
            left.next = tmp;
            left = right;
            right = left.next;
        }
        else {
            left = left.next;
            right = right.next;
        }
    }
    return fake.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists: ListNode[]) {
//   const fake: ListNode = {
//     val: null,
//     next: null
//   }
//   let pointer = fake
//   lists = lists.filter(node => !!node)
//   while (lists.length > 0) {
//     lists.sort((a, b) => a.val - b.val)
//     pointer.next = { val: lists[0].val, next: null }
//     pointer = pointer.next
//     lists[0] = lists[0].next
//     if (!lists[0]) lists.splice(0, 1)
//   }
//   return fake.next
// };
var mergeKLists = function (lists) {
    lists = lists.filter(node => !!node);
    while (lists.length > 1)
        lists.unshift(mergeTwoLists(lists.pop(), lists.pop()));
    return lists[0] || null;
};
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

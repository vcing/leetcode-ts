/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head: ListNode) {
  if(!head) return null
  const stack:ListNode[] = []
  let current = head
  while(current.next) {
    const index = stack.indexOf(current)
    if(index !== -1) return stack[index - 1]
    stack.push(current)
    current = current.next
  }
  return null
};

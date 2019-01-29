/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (41.32%)
 * Total Accepted:    293.5K
 * Total Submissions: 704.1K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 *
 * Example 1:
 *
 *
 * Input: 1->1->2
 * Output: 1->2
 *
 *
 * Example 2:
 *
 *
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 *
 *
 */
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
var deleteDuplicates = function (head) {
    const fake = { val: null, next: head };
    let left = fake;
    let right = head;
    while (right) {
        if (left.val === right.val) {
            right = right.next;
            while (right && right.val === left.val)
                right = right.next;
            left.next = right;
        }
        else {
            left = right;
            right = right.next;
        }
    }
    return fake.next;
};

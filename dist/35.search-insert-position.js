/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.07%)
 * Total Accepted:    333.4K
 * Total Submissions: 830.9K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 *
 * You may assume no duplicates in the array.
 *
 * Example 1:
 *
 *
 * Input: [1,3,5,6], 5
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: [1,3,5,6], 2
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: [1,3,5,6], 7
 * Output: 4
 *
 *
 * Example 4:
 *
 *
 * Input: [1,3,5,6], 0
 * Output: 0
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (target <= nums[0])
        return 0;
    if (target > nums[nums.length - 1])
        return nums.length;
    if (target === nums[nums.length - 1])
        return nums.length - 1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (left === right)
            return target === nums[left] ? left : target > nums[left] ? left + 1 : left;
        const mid = Math.floor((left + right) / 2);
        // console.log('mid:', mid)
        if (nums[mid] === target) {
            return target === nums[mid] ? mid : target > nums[mid] ? mid + 1 : mid - 1;
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
};
// console.log(searchInsert([1, 3], 2))
// console.log(searchInsert([ 5, 7, 9, 10, 11], 8))

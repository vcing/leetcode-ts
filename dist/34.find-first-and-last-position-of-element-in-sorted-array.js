/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (32.40%)
 * Total Accepted:    245.7K
 * Total Submissions: 756.6K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * If the target is not found in the array, return [-1, -1].
 *
 * Example 1:
 *
 *
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 *
 *
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length < 2)
        return nums[0] === target ? [0, 0] : [-1, -1];
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            right = mid;
            while (nums[right + 1] === nums[mid])
                right++;
            left = mid;
            while (nums[left - 1] === nums[mid])
                left--;
            return [left, right];
        }
        else if (nums[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }
    return [-1, -1];
};
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8))

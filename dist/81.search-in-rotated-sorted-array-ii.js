/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Medium (32.42%)
 * Total Accepted:    153K
 * Total Submissions: 471.2K
 * Testcase Example:  '[2,5,6,0,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 *
 * You are given a target value to search. If found in the array return true,
 * otherwise return false.
 *
 * Example 1:
 *
 *
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 *
 * Follow up:
 *
 *
 * This is a follow up problem to Search in Rotated Sorted Array, where nums
 * may contain duplicates.
 * Would this affect the run-time complexity? How and why?
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var SRSA = function (nums, target) {
    nums = [...new Set(nums)];
    // console.log(nums)
    if (nums.length <= 1)
        return target === nums[0];
    if (nums.length <= 2)
        return target === nums[0] || target === nums[1];
    const findStart = () => {
        let result = Math.floor(nums.length / 2);
        const middle = nums[nums.length - 1];
        let start = 0;
        let end = nums.length - 1;
        while (true) {
            // console.log('result:', result)
            if (result === 0)
                return 0;
            if ((nums[result - 1] === undefined || nums[result] < nums[result - 1]) && (nums[result + 1] === undefined || nums[result] <= nums[result + 1]))
                return result;
            else if (nums[result] > middle) {
                start = result;
                result = Math.ceil((start + end) / 2);
            }
            else if (nums[result] < middle) {
                end = result;
                result = Math.floor((start + end) / 2);
            }
        }
    };
    const binarySearch = (nums) => {
        const middle = Math.floor(nums.length / 2);
        if (nums.length <= 1)
            return target === nums[0];
        if (target === nums[middle])
            return true;
        if (target > nums[middle])
            return binarySearch(nums.slice(middle + 1));
        if (target < nums[middle])
            return binarySearch(nums.slice(0, middle));
    };
    const start = findStart();
    // console.log('start:', start)
    const last = start - 1;
    const middle = nums.length - 1;
    if (target === nums[middle])
        return true;
    else if (target > nums[middle]) {
        if (target > nums[last])
            return false;
        return !!binarySearch(nums.slice(0, start));
    }
    else if (target < nums[middle]) {
        if (target < nums[start])
            return false;
        return !!binarySearch(nums.slice(start));
    }
};
// console.log(search([2, 5, 6, 0, 0, 1, 2], 3))
// console.log(search([1,3,5,7], 2))
// console.log(search([3, 5, 1], 3))
// console.log(search([4, 5, 6, 7, 8, 0, 1, 2], 8))
// console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 25))

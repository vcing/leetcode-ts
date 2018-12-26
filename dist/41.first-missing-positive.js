/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (27.41%)
 * Total Accepted:    175.2K
 * Total Submissions: 635.9K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 *
 * Example 1:
 *
 *
 * Input: [1,2,0]
 * Output: 3
 *
 *
 * Example 2:
 *
 *
 * Input: [3,4,-1,1]
 * Output: 2
 *
 *
 * Example 3:
 *
 *
 * Input: [7,8,9,11,12]
 * Output: 1
 *
 *
 * Note:
 *
 * Your algorithm should run in O(n) time and uses constant extra space.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums[nums.length - 1]; i++)
        if (nums.indexOf(i) === -1)
            return i;
    return nums[nums.length - 1] + 1 || 1;
};

/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (49.17%)
 * Total Accepted:    316.7K
 * Total Submissions: 631.7K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 *
 * Example:
 *
 *
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [[]];
    const backTracking = (current, length, start) => {
        if (current.length === length)
            return result.push(current);
        for (let i = start; i < nums.length; i++)
            backTracking(current.concat(nums[i]), length, i + 1);
    };
    for (let i = 1; i <= nums.length; i++)
        backTracking([], i, 0);
    return result;
};
console.log(subsets([1, 2, 3]));
// console.log(subsets([4, 2, 3, 4, 5, 6]))

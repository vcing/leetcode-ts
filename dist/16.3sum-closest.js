/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (33.21%)
 * Total Accepted:    219.8K
 * Total Submissions: 660.7K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 *
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length < 3)
        return 0;
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
    let delta = Math.abs(target - result);
    // console.log(nums)
    nums.some((n, index) => {
        if (nums.length - index < 3)
            return false;
        for (let i = index + 1, j = nums.length - 1; i < j;) {
            const _result = n + nums[i] + nums[j];
            const _delta = Math.abs(target - _result);
            if (_delta < delta) {
                result = _result;
                delta = _delta;
            }
            // console.log(n, nums[i], nums[j], _result, target, i, j)
            if (_result === target) {
                result = target;
                return true;
            }
            else if (_result > target) {
                j--;
            }
            else {
                i++;
            }
        }
        return false;
    });
    return result;
};
// console.log(threeSumClosest([0, 2, 1, -3], 0))

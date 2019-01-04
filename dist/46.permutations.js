/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (51.61%)
 * Total Accepted:    315.9K
 * Total Submissions: 606.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 *
 * Example:
 *
 *
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, prefix = [], result = []) {
    if (nums.length > 1)
        for (let i = 0; i < nums.length; i++)
            permute(nums.filter(v => v !== nums[i]), prefix.concat(nums[i]), result);
    else
        result.push(prefix.concat(nums));
    return result;
};
// console.log(permute([1, 2, 3, 4, 6]))

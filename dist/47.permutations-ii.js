/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (37.94%)
 * Total Accepted:    208.6K
 * Total Submissions: 545.1K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 *
 * Example:
 *
 *
 * Input: [1,1,2]
 * Output:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums, prefix = [], result = []) {
    nums.sort((a, b) => a - b);
    if (nums.length > 1)
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1])
                continue;
            permuteUnique(nums.slice(0, i).concat(nums.slice(i + 1)), prefix.concat(nums[i]), result);
        }
    else
        result.push(prefix.concat(nums));
    return result;
};
// console.log(permuteUnique([1, 1, 2]))
// console.log(permuteUnique([-1,2,-1,2,1,-1,2,1]))

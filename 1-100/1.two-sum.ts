/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (39.40%)
 * Total Accepted:    1.2M
 * Total Submissions: 3.2M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums: number[], target: number) {
  const numbers = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num)
  let b = { num: 0, index: 0 }
  const a = numbers.find((a, aIndex) => !!(b = numbers.slice(aIndex + 1).find(b => a.num + b.num === target)))
  return [a.index, b.index]
};

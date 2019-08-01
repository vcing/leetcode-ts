/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 *
 * https://leetcode.com/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (45.97%)
 * Total Accepted:    173.5K
 * Total Submissions: 372.6K
 * Testcase Example:  '[2,2,3,2]'
 *
 * Given a non-empty array of integers, every element appears three times
 * except for one, which appears exactly once. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 * 
 * Example 1:
 * 
 * 
 * Input: [2,2,3,2]
 * Output: 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [0,1,0,1,0,1,99]
 * Output: 99
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums: number[]): number {
  const s:Set<number> = new Set(nums)  
  let setSum = 0
  for( let value of s.values() ) setSum += value
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  return (setSum * 3 - sum) / 2
};

console.log(singleNumber([2,2,3,2]))

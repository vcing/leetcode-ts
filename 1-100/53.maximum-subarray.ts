/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (41.91%)
 * Total Accepted:    431K
 * Total Submissions: 1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums: number[]) {
//   if (nums.length <= 1) return nums[0] || 0
//   let result = nums[0]
//   for (let i = nums.length; i > 0; i--) {
//     for (let j = 0; j <= nums.length - i; j++) {
//       const curr = nums.slice(j, i + j).reduce((prev, curr) => prev += curr, 0)
//       // console.log(curr, i, j)
//       if (curr > result) result = curr
//     }
//   }
//   return result
// };

var maxSubArray = function (nums: number[]) {
  if (nums.length <= 1) return nums[0] || 0
  const dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 1], 0)
  }
  return Math.max(...dp)
};

// console.log(maxSubArray([-2, 1]))
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
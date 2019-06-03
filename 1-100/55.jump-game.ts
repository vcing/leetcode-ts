/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (30.59%)
 * Total Accepted:    221.6K
 * Total Submissions: 718.7K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Determine if you are able to reach the last index.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its
 * maximum
 * jump length is 0, which makes it impossible to reach the last index.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// my first solution
// var canJump = function (nums: number[]) {
//   if (nums.length < 2) return true
//   for (let i = 1; i < nums.length; i++) {
//     let thounght = false
//     for (let j = 1; j <= i; j++) {
//       const n = i - j
//       if (nums[n] + n >= i) {
//         thounght = true
//         break;
//       }
//     }
//     if (!thounght) return false
//   }
//   return true
// };

// backtracking not work
// var canJump = function (nums: number[]) {
//   if (nums[0] >= nums.length - 1) return true
//   for (let i = nums[0]; i > 0; i--) {
//     if (canJump(nums.slice(i))) return true
//   }
//   return false
// };

// var canJump = function (nums: number[]) {
//   if (nums[0] >= nums.length - 1) return true
//   for (let i = nums[0]; i > 0; i--) {
//     if (canJump(nums.slice(i))) return true
//   }
//   return false
// };

// var canJump = function (nums: number[]) {
//   if (nums.length < 2) return true
//   const dp = new Array(nums.length).fill(false)
//   for (let i = nums.length - 2; i >= 0; i--) {
//     let max = i + nums[i]
//     if (max >= nums.length - 1) {
//       dp[i] = max
//       continue;
//     }
//     for (let j = 1; j <= nums[i] && i + j < nums.length - 1; j++) {
//       const reach = dp[i + j]
//       if (reach > max) max = reach
//     }
//     dp[i] = max
//   }
//   // console.log(dp)
//   return dp[0] >= nums.length - 1
// }

// greedy
var canJump = function (nums: number[]) {
  if (nums.length === 1) return true;
  if (nums[0] === 0) return false;
  let last = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--)
    if (nums[i] + i >= last) last = i
  return last === 0
}

// console.log(canJump([1, 1, 1, 0]))
// console.log(canJump([2, 3, 1, 1, 4]))
// console.log(canJump([3, 2, 1, 0, 4, 5]))
// console.log(canJump([2, 0, 6, 9, 8, 4, 5, 0, 8, 9, 1, 2, 9, 6, 8, 8, 0, 6, 3, 1, 2, 2, 1, 2, 6, 5, 3, 1, 2, 2, 6, 4, 2, 4, 3, 0, 0, 0, 3, 8, 2, 4, 0, 1, 2, 0, 1, 4, 6, 5, 8, 0, 7, 9, 3, 4, 6, 6, 5, 8, 9, 3, 4, 3, 7, 0, 4, 9, 0, 9, 8, 4, 3, 0, 7, 7, 1, 9, 1, 9, 4, 9, 0, 1, 9, 5, 7, 7, 1, 5, 8, 2, 8, 2, 6, 8, 2, 2, 7, 5, 1, 7, 9, 6]))


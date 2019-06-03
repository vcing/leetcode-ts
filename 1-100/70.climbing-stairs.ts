/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (42.50%)
 * Total Accepted:    335.8K
 * Total Submissions: 782.8K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n: number) {
//   if(n === 0) return 0
//   const dp = []
//   dp[n - 1] = 1
//   dp[n - 2] = 2
//   for (let i = n - 3; i >= 0; i--) {
//     dp[i] = dp[i + 1] + dp[i + 2]
//   }
//   return dp[0]
// };

var climbStairs = function (n: number) {
  if (n === 0) return 0
  const dp = []
  dp[0] = 1
  dp[1] = 2
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n - 1]
}

// var climbStairs = function (n: number): number {
//   if (n < 3) return n
//   return climbStairs(n - 1) + climbStairs(n - 2)
// };



console.log(climbStairs(43))
/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (29.91%)
 * Total Accepted:    313.2K
 * Total Submissions: 1M
 * Testcase Example:  '4'
 *
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x, where x is guaranteed to be a
 * non-negative integer.
 * 
 * Since the return type is an integer, the decimal digits are truncated and
 * only the integer part of the result is returned.
 * 
 * Example 1:
 * 
 * 
 * Input: 4
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since 
 * the decimal part is truncated, 2 is returned.
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x: number) {
//   for (let i = 1; ; i++) {
//     if (i * i > x) return --i
//   }
// };

var mySqrt = function (x: number) {
  return Math.trunc(Math.sqrt(x))
}

// console.log(mySqrt(64))
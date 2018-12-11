/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.68%)
 * Total Accepted:    540.1K
 * Total Submissions: 2.2M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x: number) {
  if (x > 2147483647 || x < -2147483648) return 0
  const isNegtive = x < 0
  if (isNegtive) x = -x
  let result = ''
  x.toString().split('').forEach(n => result = n + result)
  const resultNumber = parseInt(result) * (isNegtive ? -1 : 1);
  if (resultNumber > 2147483647 || resultNumber < -2147483648) return 0
  return resultNumber
};

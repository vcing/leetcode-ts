/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (29.25%)
 * Total Accepted:    173.1K
 * Total Submissions: 587.9K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 * 
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * 
 * Example 2:
 * 
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Note:
 * 
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1: string, num2: string) {
  if (num1 === '0' || num2 === '0') return '0'
  const num1Arr = num1.split('')
  const num2Arr = num2.split('')
  const sum: number[] = []
  num1Arr.map((n, i) => {
    const n1 = parseInt(n)
    num2Arr.map((nn, j) => {
      const n2 = parseInt(nn)
      // console.log(n1, n2)
      if (sum[i + j] === undefined) sum[i + j] = n1 * n2
      else sum[i + j] += n1 * n2
    }, 0)
  }, 0)
  let result = ''
  // console.log(sum)
  for (let i = sum.length - 1; i >= 0; i--) {
    const n = sum[i]
    if (n > 9) {
      const carry = Math.floor(n / 10)
      if (i === 0) {
        result = n + result
      } else {
        if (sum[i - 1]) sum[i - 1] += carry
        else sum[i - 1] = carry
        result = n % 10 + result
      }
    } else result = n + result
  }
  return result
};

// console.log(multiply("123456789", "987654321"))
// console.log(multiply("123456789", "987654321"))
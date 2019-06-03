/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (36.76%)
 * Total Accepted:    263.7K
 * Total Submissions: 706.9K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a: string, b: string) {
  const aLength = a.length
  const bLength = b.length
  let plusOne = 0
  let result = ''
  for (let i = 1; i <= Math.max(a.length, b.length); i++) {
    const sum = parseInt(a[aLength - i] || '0') + parseInt(b[bLength - i] || '0') + plusOne
    plusOne = 0
    result = sum % 2 + result
    if (sum >= 2) plusOne = 1
  }
  return plusOne === 1 ? '1' + result : result
};

// var addBinary = function (a: string, b: string) {
//   const ba = parseInt(a, 10)
//   const bb = parseInt(b, 10)
//   const sum = (ba + bb).toString()
//   let carry = 0
//   let result = ''
//   for (let i = sum.length - 1; i >= 0; i--) {
//     const current = parseInt(sum[i]) + carry
//     result = current % 2 + result
//     carry = current >= 2 ? 1 : 0
//   }
//   return carry === 1 ? '1' + result : result
// };

// console.log(addBinary('1101', '11'))

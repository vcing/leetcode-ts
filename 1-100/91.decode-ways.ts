/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (21.36%)
 * Total Accepted:    233.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 * 
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 * 
 * Example 1:
 * 
 * 
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s: string) {
  if (s.startsWith('0')) return 0
  if (s.length < 2) return 1
  const numbers = s.split('')
  const dp: number[] = []
  numbers.every((n, i) => {
    const next = numbers[i + 1]
    if (n === '0') {
      if (dp[dp.length - 1] === 1 || dp[dp.length - 1] === 0) return false
      if (dp[dp.length - 1]) dp[dp.length - 1] = 1
      if (dp[dp.length - 2]) dp[dp.length - 2] = 1
      dp.push(0)
    }
    else if (n === '2' && next && next <= '6') dp.push(2)
    else if (n === '1') dp.push(2)
    else dp.push(1)
    return true
  })
  if (dp.length !== numbers.length) return 0
  dp[dp.length - 1] = 1
  // console.log(dp)
  for (let i = dp.length - 2; i >= 0; i--) {
    if (dp[i] === 2) {
      dp[i] = dp[i + 1] + (dp[i + 2] || 1)
    } else {
      dp[i] = dp[i + 1]
    }
  }
  // console.log(dp)
  return dp[0]
};

// console.log(numDecodings('2265869841231212121212111111222222111999999999999999'))
// console.log(numDecodings('10'))
// console.log(numDecodings('110'))
// console.log(numDecodings('17'))
// console.log(numDecodings('1212'))
// console.log(numDecodings('230'))
// console.log(numDecodings('11'))
// console.log(numDecodings('611'))


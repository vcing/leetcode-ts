/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (24.34%)
 * Total Accepted:    160.1K
 * Total Submissions: 656K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 * 
 * Example 1:
 * 
 * 
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function (s: string) {
//   let result = 0
//   let pointer = 0
//   while (pointer < s.length) {
//     if (s[pointer] === '(') {
//       const stacks = []
//       let sp = pointer
//       while (sp < s.length) {
//         if (s[sp] === '(') stacks.push('(')
//         else {
//           if (stacks.length > 0) stacks.pop()
//           else break
//         }
//         // console.log(sp, pointer, stacks);
//         if (stacks.length === 0) {
//           console.log(sp, pointer)
//           result = result > sp - pointer + 1 ? result : sp - pointer + 1
//         }
//         sp++
//       }
//     }
//     pointer++
//   }
//   return result
// };

// var longestValidParentheses = function (s: string) {
//   if (!s || s.length === 0) return 0
//   const dp: number[] = Array(s.length).fill(0)
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ')') {
//       if (s[i - 1] === '(') dp[i] = (i > 1 ? dp[i - 2] : 0) + 2
//       else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(')
//         dp[i] = dp[i - 1] + (i - dp[i - 1] > 1 ? dp[i - dp[i - 1] - 2] : 0) + 2
//     }
//   }
//   return Math.max(...dp)
// }

var longestValidParentheses = function (s: string) {
  const stack = [-1]
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i)
    else {
      if (stack.length > 0) stack.pop()
      if (stack.length === 0) stack.push(i)
    }
    max = Math.max(max, (i - stack[stack.length - 1]))
  }
  return max
}
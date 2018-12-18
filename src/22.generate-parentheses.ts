/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (51.52%)
 * Total Accepted:    273.9K
 * Total Submissions: 530.2K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n: number): string[] {
  const result: string[] = []
  if (n === 0) result.push('')
  else {
    for (let i = 0; i < n; i++) {
      const left = generateParenthesis(i)
      left.forEach((l, li) => {
        const right = generateParenthesis(n - i - 1)
        right.forEach((r, ri) => {
          result.push('(' + l + ')' + r)
        })
      })
    }
  }
  return result
};

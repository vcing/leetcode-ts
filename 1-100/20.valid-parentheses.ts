/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.13%)
 * Total Accepted:    459.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
// const parentheses = ['{', '}', '[', ']', '(', ')']
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s: string): boolean {
//   if (s.length === 0) return true
//   if (s.length % 2 !== 0) return false
//   const ap = s.indexOf(')')
//   const bp = s.indexOf(']')
//   const cp = s.indexOf('}')
//   const mp = Math.min(...([ap, bp, cp].filter(n => n >= 0)))
//   const mpi = parentheses.indexOf(s[mp])
//   const mpii = parentheses.indexOf(s[mp - 1])
//   if (mpi - mpii === 1) {
//     const sArr = s.split('')
//     sArr.splice(mp - 1, 2)
//     return isValid(sArr.join(''))
//   } else return false
// };
var isValid = function (s: string) {
  const stacks = []
  for (let i = 0; i < s.length; i++) {
    if (['(', '{', '['].indexOf(s[i]) >= 0) {
      stacks.push(s[i])
    } else {
      if (stacks.length === 0) return false
      const p = stacks.pop()
      if (Math.abs(s.charCodeAt(i) - p.charCodeAt(0)) > 2) return false
    }
  }
  return stacks.length === 0 ? true : false
}
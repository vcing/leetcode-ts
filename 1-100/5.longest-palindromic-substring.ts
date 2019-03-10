/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.79%)
 * Total Accepted:    420.2K
 * Total Submissions: 1.6M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */

// work, but too slow
// var longestPalindrome = function (s: string) {
//   if (s.length < 2) return s
//   if (s.length === 2) return s[0] === s[1] ? s : s[0]
//   const endBoundry = s.length % 2 === 0 ? (s.length / 2) : Math.floor(s.length / 2)
//   let length = endBoundry
//   let start = 0

//   while (length > 0) {
//     let end = start + length
//     while (end < s.length) {
//       const palindrome = getPalindrome(s, start, end)
//       if (palindrome) {
//         return palindrome
//       } else {
//         start++
//         end++
//       }
//     }
//     length--
//     start = 0
//   }
//   return s[0]
// };

// const getPalindrome = (s: string, start: number, end: number) => {
//   const reverseLeftString = reverseString(s.substring(start, end))
//   const length = end - start
//   const rightString1 = s.substr(end - 1, length)
//   const rightString2 = s.substr(end, length)
//   const rightString3 = s.substr(end + 1, length)
//   if (reverseLeftString === rightString3) return s.substr(start, length * 2 + 1)
//   if (reverseLeftString === rightString2) return s.substr(start, length * 2)
//   if (length > 1 && reverseLeftString === rightString1) return s.substr(start, length * 2 - 1)
//   return false
// }

// const reverseString = (str: string) => str.split('').reverse().join('')

var longestPalindrome = function (s: string) {
  let result = ''
  s.split('').forEach((letter, index) => {
    const ep = getPlaindrome(s, index, letter)
    if (result.length < ep.length) result = ep
    const op = letter === s[index + 1] ? getPlaindrome(s, index + 0.5, letter + letter) : false
    if (op && result.length < op.length) result = op
  })
  return result
}

const getPlaindrome = (s: string, center: number, p: string): string => {
  const isOdd = center.toString().indexOf('.') >= 0
  const r = isOdd ? p.length / 2 : Math.floor(p.length / 2)
  const left = isOdd ? s[Math.floor(center) + r + 1] : s[center + r + 1]
  const right = isOdd ? s[Math.floor(center) - r] : s[center - r - 1]
  if (left && right && left === right) return getPlaindrome(s, center, left + p + right)
  return p
}
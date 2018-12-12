/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 *
 * https://leetcode.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (24.61%)
 * Total Accepted:    253.4K
 * Total Submissions: 1M
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement regular expression
 * matching with support for '.' and '*'.
 *
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 *
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 *
 *
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like . or *.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 *
 * Example 2:
 *
 *
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the precedeng element, 'a'.
 * Therefore, by repeating 'a' once, it becomes "aa".
 *
 *
 * Example 3:
 *
 *
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 *
 *
 * Example 4:
 *
 *
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore
 * it matches "aab".
 *
 *
 * Example 5:
 *
 *
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
 *
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function (s: string, p: string) {
//   const conditions: condition[] = []
//   let start = 0
//   let position = p.indexOf('*', start)
//   while (position >= 0) {
//     conditions.push({ letter: s[position], position, pattern: '*' })
//     start = position + 1
//     position = p.indexOf('*', start)
//   }
//   start = 0
//   position = p.indexOf('.', start)
//   while (position >= 0) {
//     conditions.push({ letter: s[position], position, pattern: '.' })
//     start = position + 1
//     position = p.indexOf('.', start)
//   }
//   if (conditions.length === 0) return s === p ? true : false
//   conditions.sort((a, b) => a.position - b.position)
//   let index = 0
//   let sWindowLeft = 0
//   let sWindowRight = conditions[index].position
//   let pWindowLeft = 0
//   let pWindowRight = conditions[index].position
//   let fills = 0
//   while (sWindowLeft < s.length) {
//     console.log('sWindowLeft:', sWindowLeft)
//     console.log('sWindowRight:', sWindowRight)
//     console.log('pWindowLeft:', pWindowLeft)
//     console.log('pWindowRight:', pWindowRight)
//     console.log('false 0')
//     if (s.substring(sWindowLeft, sWindowRight) !== p.substring(pWindowLeft, pWindowRight)) return false
//     const c = conditions[index]
//     let nc = conditions[index + 1] || { position: p.length }
//     if (c.pattern === '.') {
//       sWindowLeft = sWindowRight + 1
//       sWindowRight = fills + nc.position
//       pWindowLeft = pWindowRight + 1
//       pWindowRight = nc.position
//     } else {
//       if (c.letter === '.') {
//         const nextLetter = p[c.position + 1]
//         const nlIndex = s.indexOf(nextLetter, sWindowRight)
//         console.log('false 1')
//         if (nlIndex < 0) return false
//         fills += (nlIndex - sWindowRight)
//         sWindowLeft = nlIndex
//         sWindowRight = fills + nc.position
//         pWindowLeft = pWindowRight
//         pWindowRight = nc.position
//       } else {
//         let nextLetter = p[c.position + 1]
//         if (nextLetter === '.') {
//           nc = conditions[index + 2]
//           nextLetter = p[c.position + 2]
//           index++
//         }
//         if (!nextLetter) return true
//         const subEnd = s.indexOf(nextLetter, sWindowRight)
//         console.log('false 2', nextLetter, sWindowRight);
//         if (subEnd < 0) return false
//         const subStart = sWindowRight
//         console.log('false 3')
//         if (new Set(s.substring(subStart, subEnd).split('')).size !== 1) return false
//         fills += (subEnd - sWindowRight)
//         sWindowLeft = subEnd
//         sWindowRight = fills + nc.position
//         pWindowLeft = pWindowRight
//         pWindowRight = nc.position
//       }
//     }
//     console.log('sWindowLeft:', sWindowLeft);
//     console.log('sWindowRight:', sWindowRight);
//     console.log('pWindowLeft:', pWindowLeft);
//     console.log('pWindowRight:', pWindowRight);
//     index++
//     return true
//   }
// };
// var isMatch = function (s: string, p: string) {
//   const conditions: condition[] = []
//   let start = 0
//   let position = p.indexOf('*', start)
//   while (position >= 0) {
//     conditions.push({ letter: s[position], position, pattern: '*' })
//     start = position + 1
//     position = p.indexOf('*', start)
//   }
//   start = 0
//   position = p.indexOf('.', start)
//   while (position >= 0) {
//     conditions.push({ letter: s[position], position, pattern: '.' })
//     start = position + 1
//     position = p.indexOf('.', start)
//   }
//   if (conditions.length === 0) return s === p ? true : false
//   conditions.sort((a, b) => a.position - b.position)
//   let index = conditions.length - 1
//   let c = conditions[index]
//   let _s = s.split('').reverse().join('')
//   let _p = p.split('').reverse().join('')
//   while (_s.length > 0) {
//     console.log('1:', c, _s, _p)
//     if (c.position !== _p.length - 1) {
//       const end = p.length - c.position - 1
//       console.log("e:", end, c);
//       const deltaS = _s.substring(0, end)
//       const deltaP = _p.substring(0, end)
//       console.log("d:", deltaS, deltaP)
//       index--
//       _s = _s.substring(end, Infinity)
//       _p = _p.substring(end, Infinity)
//     }
//     console.log('2:', c, _s, _p)
//     if (_p[0] === '.') {
//       console.log('3:', c, _s, _p)
//       _s = _s.substring(1, Infinity)
//       _p = _p.substring(1, Infinity)
//     } else if (_p[0] === '*') {
//       console.log('4:', c, _s, _p)
//       const char = _p[_p.length - 2]
//       if (char === '.') {
//         console.log('5:', c, _s, _p)
//         const bChar = _p[_p.length - 3]
//         const position = _s.indexOf(bChar)
//         if (position < 0) return false
//         if (new Set(_s.substring(0, position).split('')).size !== 0) return false
//         _s = _s.substring(position + 1, Infinity)
//         _p = _p.substring(2, Infinity)
//       } else if (char === '*') {
//         return false
//       } else {
//         console.log('6:', c, _s, _p)
//         const position = _s.indexOf(char)
//         const sub = _s.substring(0, position + 1)
//         if (position < 0) return false
//         if (new Set(sub.split('')).size !== 0) return false
//         _s = _s.substring(sub.length, Infinity)
//         _p = _p.substring(1, Infinity)
//       }
//     }
//     console.log(_s, _p)
//     index--
//   }
//   return true
// };

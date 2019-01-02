/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 *
 * https://leetcode.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (21.93%)
 * Total Accepted:    153.9K
 * Total Submissions: 698K
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern
 * matching with support for '?' and '*'.
 * 
 * 
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 * 
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * 
 * 
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like ? or *.
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
 * p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "cb"
 * p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not
 * match 'b'.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input:
 * s = "adceb"
 * p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*'
 * matches the substring "dce".
 * 
 * 
 * Example 5:
 * 
 * 
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
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
//   while (s.length > 0) {
//     const p1 = p.indexOf('?')
//     const p2 = p.indexOf('*')
//     console.log(s, p, p1, p2)
//     if (p1 === p2) return s === p
//     let current
//     if (p1 === -1) current = p2
//     else if (p2 === -1) current = p1
//     else current = p1 > p2 ? p2 : p1
//     const ssub = s.substring(0, current)
//     const psub = p.substring(0, current)
//     // console.log(current, psub, ssub, p, s)
//     if (psub !== ssub) return false
//     s = s.substr(current)
//     p = p.substr(current)
//     if (p[0] === '?') {
//       s = s.substr(1)
//       p = p.substr(1)
//     } else {
//       while (p[1] && (p[1] === '?' || p[1] === '*')) {
//         if (p[0] === '?') {
//           if (s.length === 0) return false
//           s = s.substr(1)
//         }
//         if (p[1] === '?' && p[0] === '*' && p.length === 2) return s.length >= 1
//         p = p.substr(1)
//       }
//       // console.log(s, p)
//       if (!p[1]) return p[0] === '*' ? true : s.length === 1
//       const pnn1 = p.indexOf('*', 1)
//       const pnn2 = p.indexOf('?', 1)
//       let pnn
//       if (pnn1 === pnn2) pnn = -1
//       if (pnn1 === -1) pnn = pnn2
//       else if (pnn2 === -1) pnn = pnn1
//       else pnn = pnn1 > pnn2 ? pnn2 : pnn1
//       // console.log(pnn, pnn1, pnn2)
//       let ni = 0
//       let _next = s.indexOf(p.substring(1, pnn >= 0 ? pnn : undefined))
//       let snext = 0
//       while (_next !== -1) {
//         snext = _next
//         _next = s.indexOf(p.substring(1, pnn >= 0 ? pnn : undefined), snext + 1)
//       }
//       // const snext = s.indexOf(p.substring(1, pnn >= 0 ? pnn : undefined))
//       // console.log(snext, p, p.substring(1, pnn >= 0 ? pnn : undefined))
//       if (snext === -1) return false
//       p = p.substr(1)
//       s = s.substr(snext)
//       // console.log('\n')
//     }
//   }
//   return p.length === 0 || p === '*'
// };

var isMatch = function (s: string, p: string) {

  const dp = new Array(p.length + 1).fill(false).map(x => new Array(s.length + 1).fill(false));

  dp[0][0] = true

  for (let i = 1; i <= p.length; i++) {
    if (p[i - 1] === '*') {
      dp[i][0] = dp[i - 1][0]
    }
  }

  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === p[i] || p[i] === '?') {
        dp[i + 1][j + 1] = dp[i][j]
      } else if (p[i] === '*') {
        dp[i + 1][j + 1] = dp[i][j + 1] || dp[i + 1][j]
      }
    }
  }

  // console.log(dp)
  return !!dp[p.length][s.length];
}

// console.log(isMatch("a", "?"))
// console.log(isMatch("a", "*?*?*"))
// console.log(isMatch("ab", "a*?"))
// console.log(isMatch("hi", "*?"))
// console.log(isMatch("acdcb", "*a*b"))
// console.log(isMatch("acdcb", "a*c?b"))
// console.log(isMatch("aa", "*a"))
// console.log(isMatch("abefcdgiescdfimde", "ab*cd?i*de"))
// console.log(isMatch("mississippi", "m??*ss*?i*pi"))
// console.log(isMatch("mississippi", "m*iss*iss*"))
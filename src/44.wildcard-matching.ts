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
var isMatch = function (s: string, p: string) {
  while (s.length > 0) {
    const p1 = p.indexOf('?')
    const p2 = p.indexOf('*')
    console.log(p1, p2)
    if (p1 === p2) return false
    let current
    if (p1 === -1) current = p2
    else if (p2 === -1) current = p1
    else current = p1 > p2 ? p2 : p1
    const pattern = p[current]
    const ssub = s.substring(0, current)
    const psub = p.substring(0, current)
    console.log(current, psub, ssub, p, s)
    if (psub !== ssub) return false
    s = s.substr(current)
    p = p.substr(current)
    const pnext = p[1]
    const snext = s.indexOf(pnext)
    console.log(p, s, pnext, snext)
    if (snext === -1) return false
    console.log(2)
    const snextsub = s.substring(0, snext)
    if (pattern === '?' && snextsub.length !== 1) return false
    console.log(3)
    p = p.substr(1)
    s = s.substr(snext)
    console.log(p, s)
    console.log('\n\n\n')
  }
  return true
};

console.log(isMatch("acdcb", "a*c?cb"))
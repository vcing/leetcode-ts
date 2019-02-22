/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 *
 * https://leetcode.com/problems/interleaving-string/description/
 *
 * algorithms
 * Hard (26.57%)
 * Total Accepted:    103.4K
 * Total Submissions: 380.4K
 * Testcase Example:  '"aabcc"\n"dbbca"\n"aadbbcbcac"'
 *
 * Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and
 * s2.
 * 
 * Example 1:
 * 
 * 
 * Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// work but too slow
var isInterleave = function (s1: string, s2: string, s3: string) {
  if (s1.length + s2.length > s3.length) return false
  if (s3 === '' && s1 === '' && s2 === '') return true
  let dp: string[] = []
  let nextDP: string[] = []
  if (s3[0] === s1[0]) dp.push('1')
  if (s3[0] === s2[0]) dp.push('2')
  for (let i = 1; i < s3.length; i++) {
    // console.log(dp[i - 1])
    dp.forEach(str => {
      const s2Current = str.split('').filter(i => i === '2').length - 1
      const s1Current = str.split('').filter(i => i === '1').length - 1
      // console.log(s1Current, s2Current, s1[s1Current + 1], s2[s2Current + 1], s3[i])
      if (s1[s1Current + 1] === s3[i]) nextDP.push(str + '1')
      if (s2[s2Current + 1] === s3[i]) nextDP.push(str + '2')
    })
    console.log(dp)
    dp = nextDP
    nextDP = []
  }
  return dp.filter(str => {
    const s1Length = str.split('').filter(s => s === '1').length
    const s2Length = str.split('').filter(s => s === '2').length
    if (s1Length === s3.length && s2.length !== 0) return false
    if (s2Length === s3.length && s1.length !== 0) return false
    return true
  }).length > 0
};

// console.log(isInterleave('aabcccaaa', 'dbbcacaba', 'aadbbcbcaccaba'))
// console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))
// console.log(isInterleave('', 'abc', 'ab'))
// console.log(isInterleave('a', 'b', 'a'))
// console.log(isInterleave('', 'b', 'b'))
// console.log(isInterleave('a', '', 'a'))
// console.log(isInterleave("abbbbbbcabbacaacccababaabcccabcacbcaabbbacccaaaaaababbbacbb", "ccaacabbacaccacababbbbabbcacccacccccaabaababacbbacabbbbabc", "cacbabbacbbbabcbaacbbaccacaacaacccabababbbababcccbabcabbaccabcccacccaabbcbcaccccaaaaabaaaaababbbbacbbabacbbacabbbbabc"))

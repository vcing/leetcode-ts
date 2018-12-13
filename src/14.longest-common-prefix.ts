/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.37%)
 * Total Accepted:    365.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs: string[]) {
  if (strs.length < 2) return strs[0] || ''
  if (strs.indexOf('') >= 0) return ''
  return getPrefix([strs[0]], strs.slice(1, strs.length))
};

const getPrefix = (str1: string | string[], str2: string | string[]): string => {
  let str1Prefix = str1[0]
  let str2Prefix = str2[0]
  let prefix = ''
  if (Array.isArray(str1) && str1.length > 1) {
    const mid = Math.floor(str1.length / 2)
    const left = str1.slice(0, mid)
    const right = str1.slice(mid, str1.length)
    str1Prefix = getPrefix(left, right)
  }
  if (Array.isArray(str2) && str2.length > 1) {
    const mid = Math.floor(str2.length / 2)
    const left = str2.slice(0, mid)
    const right = str2.slice(mid, str2.length)
    str2Prefix = getPrefix(left, right)
  }
  let finish = false
  let index = 0
  while (!finish) {
    if (index >= str1Prefix.length || index >= str2Prefix.length) {
      finish = true
    } else if (str1Prefix[index] === str2Prefix[index]) {
      prefix += str2Prefix[index]
      index++
    } else {
      finish = true
    }
  }
  return prefix
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
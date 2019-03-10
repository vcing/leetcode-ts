/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (42.87%)
 * Total Accepted:    275.8K
 * Total Submissions: 634.2K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 * 
 * Example:
 * 
 * 
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * Note:
 * 
 * 
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 * 
 * 
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs: string[]) {
  const groups: { [key: string]: string[] } = {}
  strs.forEach(str => {
    const key = str.split('').sort().join('')
    if (groups[key]) groups[key].push(str)
    else groups[key] = [str]
  })
  return Object.keys(groups).map(key => groups[key])
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// console.log(groupAnagrams(['te','et','at']))

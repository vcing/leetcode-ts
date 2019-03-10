/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (25.48%)
 * Total Accepted:    662.9K
 * Total Submissions: 2.6M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s: string) {
//   if (s.length < 2) return s.length
//   let currentLength = 1
//   let currentIndex = 0
//   while (currentIndex + currentLength <= s.length) {
//     let length = currentLength
//     let subString = s.substr(currentIndex, length)
//     while (currentIndex + length <= s.length && subString.length === new Set(subString).size) {
//       length++
//       subString = s.substr(currentIndex, length)
//     }
//     currentLength = currentLength === length ? currentLength : length - 1
//     currentIndex++
//   }
//   return currentLength
// };

var lengthOfLongestSubstring = function (s: string) {
  if (s.length < 2) return s.length

  // init window & longest string
  let ls = s[0]
  let windowStart = 0
  let windowEnd = 1
  let window = new Set(ls)

  while (windowEnd < s.length) {
    const currentString = s.substring(windowStart, windowEnd)
    if (window.has(s[windowEnd])) {
      const prevStart = windowStart
      windowStart = windowStart + currentString.indexOf(s[windowEnd]) + 1
      s.substring(prevStart, windowStart).split('').forEach(window.delete.bind(window))
    } else {
      ls = currentString.length + 1 > ls.length ? s.substring(windowStart, windowEnd + 1) : ls
    }
    window.add(s[windowEnd])
    windowEnd++
  }
  return ls.length
};

/*
 * @lc app=leetcode id=132 lang=javascript
 *
 * [132] Palindrome Partitioning II
 *
 * https://leetcode.com/problems/palindrome-partitioning-ii/description/
 *
 * algorithms
 * Hard (27.42%)
 * Total Accepted:    106.3K
 * Total Submissions: 382.4K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 * 
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * 
 * Example:
 * 
 * 
 * Input: "aab"
 * Output: 1
 * Explanation: The palindrome partitioning ["aa","b"] could be produced using
 * 1 cut.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s: string) {
  const isPalindrome = (start: number, length: number) => {
    const end = start + length
    let result = true
    for(let i = 0; i < Math.floor(length / 2); i++) {
      if(s[start + i] !== s[end - i - 1]) result = false
    }
    return result
  } 
  // if(isPalindrome(0, s.length)) return 0
  let result = Infinity
  const sliceString = (start: number, length: number, slice: number):void => {
      // console.log( start, length, slice )
    const end = start + length
    if(length <= 1) {
      if(result > slice) result = slice - (length ? 0 : 1) 
      return
    }
    for( let l = length; length >= 1; l-- ) {
      const originalTestResult = isPalindrome(start, l)
      const reverseTestResult = isPalindrome(end - l, l)
      if(originalTestResult) sliceString(start + l, length - l, slice + 1)
      if(reverseTestResult) sliceString(start, length - l, slice + 1)
      if(reverseTestResult || originalTestResult) return
    }
  }

  sliceString(0, s.length, 0)
  return result
};

// console.log(minCut("aaabaa"))
// console.log(minCut("iicgaeadbcfaehbgejcaeggcgbahfcajfhjjdgj"))
// console.log(minCut("aaadbcccedbeecbccaecadccbdbbcbaacccbddcccbaedbacdbcacc"))


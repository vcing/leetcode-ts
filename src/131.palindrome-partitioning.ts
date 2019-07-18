/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (40.93%)
 * Total Accepted:    170.6K
 * Total Submissions: 410K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 * 
 * Return all possible palindrome partitioning of s.
 * 
 * Example:
 * 
 * 
 * Input: "aab"
 * Output:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s: string) {
  const isPalindrome = (str: string) => {
    const length = str.length
    let result = true
    for(let i = 0; i < Math.floor(length / 2); i++) {
      if(str[i] !== str[length - 1 - i]) result = false
    }
    return result
  } 
  const results:string[][] = []
  const sliceString = (str: string, result: string[]) => {
    if(str.length === 0) results.push(result)
    for( let length = 1; length <= str.length; length++ ) {
      const testStr = str.substr(0, length) 
      if(isPalindrome(testStr)) sliceString(str.substr(length), [...result, testStr])
    }
  }

  sliceString(s, [])
  return results
};

// console.log(partition('aabccb'))

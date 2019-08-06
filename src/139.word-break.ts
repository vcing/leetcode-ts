/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 *
 * https://leetcode.com/problems/word-break/description/
 *
 * algorithms
 * Medium (35.36%)
 * Total Accepted:    362.1K
 * Total Submissions: 1M
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, determine if s can be segmented into a space-separated
 * sequence of one or more dictionary words.
 * 
 * Note:
 * 
 * 
 * The same word in the dictionary may be reused multiple times in the
 * segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "leetcode", wordDict = ["leet", "code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet
 * code".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple
 * pen apple".
 * Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s: string, wordDict: string[]) {
//   const backtracking = (s: string): boolean => {
//     for(let i = 0; i < wordDict.length; i++) {
//       const word = wordDict[i]
//       if(s.length < word.length) continue
//       if(s.startsWith(word)){
//         if(s.length === word.length) return true 
//         if(backtracking(s.slice(word.length))) return true
//       }
//     }
//     return false
//   }
//   return backtracking(s)
// };

var wordBreak = function(s:string, wordDict: string[]) {
  const dp:{[x: number]: number[]} = {0:[]}
  const lengths = wordDict.map(w => w.length)
  for(let i = 0; i < s.length; i++) {
    if(!dp[i]) continue
    for(let j = 0; j < wordDict.length; j++) {
      const word = wordDict[j] 
      if(s.length - i < word.length) continue
      if(s.startsWith(word, i)){
        if(dp[i]) dp[i].push(word.length)
        else dp[i] = [word.length]
        dp[i + word.length] = []
      }
    }
  }
  // console.log(dp)
  const backTracking = (current:number) => {
    // console.log(current)
    if(current === s.length) return true
    if(!dp[current]) return false
    const arr = dp[current]
    delete dp[current]
    for(let i = 0; i < arr.length; i++) {
      const length = arr[i]
      const next = current + length 
      if(backTracking(next)) return true
    }
    return false
  } 
  // let hasAnswer = false
  // for(let i = 0; i < lengths.length; i++) {
  //   const length = lengths[i]
  //   if(dp[s.length - length] && dp[s.length - length].indexOf(length) !== -1) hasAnswer = true
  // }
  // // console.log('has answer')
  // if(!hasAnswer) return false
  return backTracking(0)
}

// console.log(wordBreak("applepenapple", ["apple","pen"]))
// console.log(wordBreak('leetcode', ['leet', 'code']))
// console.log(wordBreak("cars", ["car","ca","rs"]))
// console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))
// console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))

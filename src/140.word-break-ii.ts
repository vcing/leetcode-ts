/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 *
 * https://leetcode.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (27.33%)
 * Total Accepted:    167.6K
 * Total Submissions: 602K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, add spaces in s to construct a sentence where each word is
 * a valid dictionary word. Return all such possible sentences.
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
 * Input:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * Output:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * Output:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * Explanation: Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output:
 * []
 * 
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s: string, wordDict: string[]) {
  const dp:{[x: number]: string[]} = {0: []}
  const lengths = wordDict.map(w => w.length)
  for(let i = 0; i < s.length; i++) {
    if(!dp[i]) continue
    for(let j = 0; j < wordDict.length; j++) {
      const word = wordDict[j] 
      if(s.length - i < word.length) continue
      if(s.startsWith(word, i)){
        if(dp[i]) dp[i].push(word)
        else dp[i] = [word]
        dp[i + word.length] = []
      }
    }
  }
  // console.log(dp)
  const results: string[] = []
  const backTracking = (current:number, result?: string) => {
    if(current === s.length) results.push(result) 
    if(!dp[current]) return
    const arr = dp[current]
    // delete dp[current]
    for(let i = 0; i < arr.length; i++) {
      const length = arr[i].length
      const next = current + length 
      backTracking(next, result ? result  + ' ' + arr[i] : arr[i])
    }
  } 
  let hasAnswer = false
  for(let i = 0; i < lengths.length; i++) {
    const length = lengths[i]
    if(dp[s.length - length] && dp[s.length - length].map(s => s.length).indexOf(length) !== -1) hasAnswer = true
  }
  // console.log('has answer')
  if(!hasAnswer) return []
  backTracking(0)
  return results
};


console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]))

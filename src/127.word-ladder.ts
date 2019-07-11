/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 *
 * https://leetcode.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (24.08%)
 * Total Accepted:    271.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * the length of shortest transformation sequence from beginWord to endWord,
 * such that:
 * 
 * 
 * Only one letter can be changed at a time.
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 * 
 * 
 * Note:
 * 
 * 
 * Return 0 if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * Output: 5
 * 
 * Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" ->
 * "dog" -> "cog",
 * return its length 5.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * Output: 0
 * 
 * Explanation: The endWord "cog" is not in wordList, therefore no possible
 * transformation.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord: string, endWord: string, wordList: string[]) {
  let results: string[][] = [[beginWord]] 
  let nextResults: string[][] = []
  let length = 0
  let wordLength = endWord.length
  let over = false
  while(results.length > 0) {
    for( let i = 0; i < results.length; i++ ) {
      const beginWord = results[i][length]
      for(let j = 0; j < wordLength; j++) {
        const expect = beginWord.slice(0, j) + beginWord.slice(j + 1)
        for(let x = 0; x < wordList.length; x++) {
          const word = wordList[x]
          if(results[i].indexOf(word) !== -1 ) continue
          const wordExpect = word.slice(0, j) + word.slice(j + 1)
          if(wordExpect === expect) {
            nextResults.push(results[i].concat(word))
            if(word === endWord) over = true
          }
        }
      }
    }
    if(over) {
      // console.log(nextResults)
      return nextResults[0].length
    }
    results = nextResults
    nextResults = []
    length++
  }
  return 0
};

// console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))
// console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]))

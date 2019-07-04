/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 *
 * https://leetcode.com/problems/word-ladder-ii/description/
 *
 * algorithms
 * Hard (17.74%)
 * Total Accepted:    124.5K
 * Total Submissions: 690.2K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * all shortest transformation sequence(s) from beginWord to endWord, such
 * that:
 *
 *
 * Only one letter can be changed at a time
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 *
 *
 * Note:
 *
 *
 * Return an empty list if there is no such transformation sequence.
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
 * Output:
 * [
 * ⁠ ["hit","hot","dot","dog","cog"],
 * ["hit","hot","lot","log","cog"]
 * ]
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
 * Output: []
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
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    const list = [];
    const helper = (beginWord, wordList, result = []) => {
        let hasExcept = false;
        for (let p = 0; p < beginWord.length; p++) {
            const except = beginWord.substring(0, p) + beginWord.substring(p + 1);
            for (let i = 0; i < wordList.length; i++) {
                const compareExcept = wordList[i].substring(0, p) + wordList[i].substring(p + 1);
                if (except === compareExcept) {
                    hasExcept = true;
                    const newBegin = wordList.splice(i, 1)[0];
                    result.push(newBegin);
                    helper(newBegin, wordList, result);
                }
            }
        }
        if (!hasExcept)
            list.push(result);
    };
    const endWordIndex = wordList.indexOf(endWord);
    if (endWordIndex === -1)
        return [];
    wordList.splice(endWordIndex, 1);
    wordList.unshift(beginWord);
    helper(endWord, wordList);
    return list.map(c => {
        c.reverse();
        c.push(endWord);
        return c;
    });
};
console.log(findLadders('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]));

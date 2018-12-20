/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (22.63%)
 * Total Accepted:    115K
 * Total Submissions: 507.5K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * You are given a string, s, and a list of words, words, that are all of the
 * same length. Find all starting indices of substring(s) in s that is a
 * concatenation of each word in words exactly once and without any intervening
 * characters.
 *
 * Example 1:
 *
 *
 * Input:
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar"
 * respectively.
 * The output order does not matter, returning [9,0] is fine too.
 *
 *
 * Example 2:
 *
 *
 * Input:
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * Output: []
 *
 *
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// var findSubstring = function (s: string, words: string[]): number[] {
//   if (!words || words.length === 0) return []
//   const result = []
//   let pointer = 0
//   const length = words[0].length
//   while (pointer < s.length) {
//     // console.log(pointer)
//     let sp = words.indexOf(s.substr(pointer, length))
//     let left = words.slice(0, sp).concat(words.slice(sp + 1))
//     while (sp !== -1) {
//       // console.log(left)
//       sp += length
//       if (left.length === 0) {
//         result.push(pointer)
//         sp = -1
//       } else {
//         sp = left.indexOf(s.substr(pointer + (words.length - left.length) * length, length))
//         left = left.slice(0, sp).concat(left.slice(sp + 1))
//       }
//     }
//     pointer++
//   }
//   return result
// };
var findSubstring = function (s, words) {
    if (!words || words.length === 0)
        return [];
    const result = [];
    const word = words.sort().join('');
    const length = words[0].length;
    let pointer = 0;
    while (pointer <= s.length - word.length) {
        const cs = s.substr(pointer, word.length);
        const ds = [];
        for (let i = 0; i < cs.length / length; i++)
            ds.push(cs.substr(i * length, length));
        ds.sort();
        if (ds.join('') === word)
            result.push(pointer);
        pointer++;
    }
    return result;
};
// var findSubstring = function (s: string, words: string[]): number[] {
//   if (!words || words.length === 0) return []
//   const result = []
//   const word = words.sort().join('')
//   const length = words[0].length
//   let pointer = 0
//   while (pointer <= s.length - word.length) {
//     const cs = s.substr(pointer, word.length).split('').reduce((prev, curr, index, arr) => {
//       if (index % length !== 0 && index !== 0) return prev
//       prev.push(s.substr(pointer + index, length))
//       return prev
//     }, []).sort().join('')
//     // console.log(cs, word)
//     if (cs === word) result.push(pointer)
//     pointer++
//   }
//   return result
// };
// console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))

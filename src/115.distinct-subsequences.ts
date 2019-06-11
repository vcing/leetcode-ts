/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 *
 * https://leetcode.com/problems/distinct-subsequences/description/
 *
 * algorithms
 * Hard (35.08%)
 * Total Accepted:    107K
 * Total Submissions: 304.7K
 * Testcase Example:  '"rabbbit"\n"rabbit"'
 *
 * Given a string S and a string T, count the number of distinct subsequences
 * of S which equals T.
 * 
 * A subsequence of a string is a new string which is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (ie, "ACE" is a
 * subsequence of "ABCDE" while "AEC" is not).
 * 
 * Example 1:
 * 
 * 
 * Input: S = "rabbbit", T = "rabbit"
 * Output: 3
 * Explanation:
 * 
 * As shown below, there are 3 ways you can generate "rabbit" from S.
 * (The caret symbol ^ means the chosen letters)
 * 
 * rabbbit
 * ^^^^ ^^
 * rabbbit
 * ^^ ^^^^
 * rabbbit
 * ^^^ ^^^
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: S = "babgbag", T = "bag"
 * Output: 5
 * Explanation:
 * 
 * As shown below, there are 5 ways you can generate "bag" from S.
 * (The caret symbol ^ means the chosen letters)
 * 
 * babgbag
 * ^^ ^
 * babgbag
 * ^^    ^
 * babgbag
 * ^    ^^
 * babgbag
 * ⁠ ^  ^^
 * babgbag
 * ⁠   ^^^
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// var numDistinct = function(s: string, t: string) {
//     let result = 0
//     const helper = (s:string, t:string) => {
//         if(t.length === 0) return result++
//         // if(t.length === 1)return result += s.split('').filter(c => c === t).length 
//         let index = s.indexOf(t[0])
//         while(index !== -1){
//             helper(s.slice(index + 1), t.slice(1))
//             index = s.indexOf(t[0], index + 1)
//         }
//     } 
//     helper(s, t)
//     return result
// };

var numDistinct = function(s: string, t: string) {
    const dp = t.split('').map(() => 0) 
    dp.unshift(1)
    for(let i = 1; i<=s.length;i++){
        for(let j = t.length;j>=1;j--){
            if(s[i - 1] === t[j - 1])  dp[j] += dp[j - 1];
        }
    } 
    return dp[t.length]
};

// console.time('cost')
// console.log(numDistinct("adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc", "bcddceeeebecbc"))
// console.timeEnd('cost')


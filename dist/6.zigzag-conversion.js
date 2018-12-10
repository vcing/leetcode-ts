/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (29.47%)
 * Total Accepted:    260.3K
 * Total Submissions: 882.9K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 *
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const middleLetters = numRows > 2 ? numRows - 2 : 0;
    const groupLetters = numRows + middleLetters;
    const groups = Math.floor(s.length / groupLetters) + 1;
    const groupColumns = 1 + middleLetters;
    const left = s.length % groupLetters;
    const columns = left === 0 ? groups * groupColumns : left > numRows ? groups * groupColumns + 1 + left - numRows : groups * groupColumns + 1;
    const resultArr = [];
    for (let i = 0; i < s.length; i++) {
        const groupNum = Math.floor(i / groupLetters);
        const groupIndex = i % groupLetters;
        const row = groupIndex + 1 > numRows ? numRows - 1 - ((groupIndex + 1) % numRows) : groupIndex;
        const score = (row + 1) * columns * groupLetters + (groupNum + 1) * groupLetters + groupIndex;
        resultArr.push({ letter: s[i], score });
    }
    return resultArr.sort((a, b) => a.score - b.score).map(l => l.letter).join('');
};

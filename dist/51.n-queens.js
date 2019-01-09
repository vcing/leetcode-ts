/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (36.35%)
 * Total Accepted:    123K
 * Total Submissions: 334.2K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 *
 *
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 *
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space
 * respectively.
 *
 * Example:
 *
 *
 * Input: 4
 * Output: [
 * ⁠[".Q..",  // Solution 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 *
 * ⁠["..Q.",  // Solution 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above.
 *
 *
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n, tmp = new Array(n).fill(1).map(() => new Array(n).fill(false)), result = []) => {
    if (n === 0) {
        // console.log(tmp)
        result.push(tmp.map(t => t.map(v => v === true ? 'Q' : '.').join('')));
    }
    else {
        for (let i = 0; i < tmp.length; i++) {
            const y = tmp.length - n;
            const x = i;
            // check x y
            let allow = true;
            for (let j = 0; j < tmp.length; j++) {
                if (tmp[j][x] || tmp[y][j]) {
                    allow = false;
                    break;
                }
            }
            // console.log(n, y, x, allow)
            if (!allow)
                continue;
            // check \ line
            const min = Math.min(x, y);
            const startX = x - min;
            const startY = y - min;
            for (let j = 0; j < Math.min(tmp.length - startX, tmp.length - startY); j++) {
                if (tmp[startY + j][startX + j]) {
                    allow = false;
                    break;
                }
            }
            if (!allow)
                continue;
            let start2X = 0;
            let start2Y = tmp.length - 1;
            if (x + y === tmp.length - 1) {
            }
            else if (x + y > tmp.length - 1) {
                start2X = x - (start2Y - y);
            }
            else {
                start2Y = x + y;
            }
            const boundary = start2Y > start2X ? start2Y - start2X : start2X - start2Y;
            // console.log('boundary:', start2Y, start2X, boundary)
            for (let j = 1; j <= boundary; j++) {
                if (tmp[start2Y - j][start2X + j]) {
                    allow = false;
                    break;
                }
            }
            // console.log(startY, startX, allow)
            // console.log(tmp)
            if (!allow)
                continue;
            tmp[y][x] = true;
            solveNQueens(n - 1, tmp, result);
            tmp[y][x] = false;
        }
    }
    return result;
};
// console.log(solveNQueens(4))

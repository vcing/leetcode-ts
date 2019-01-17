/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (45.25%)
 * Total Accepted:    247.1K
 * Total Submissions: 540.5K
 * Testcase Example:  '3\n2'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 *
 * How many possible unique paths are there?
 *
 *
 * Above is a 7 x 3 grid. How many possible unique paths are there?
 *
 * Note: m and n will be at most 100.
 *
 * Example 1:
 *
 *
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the
 * bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 *
 *
 * Example 2:
 *
 *
 * Input: m = 7, n = 3
 * Output: 28
 *
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = new Array(n).fill(true).map(() => new Array(m));
    dp[n - 1][m - 1] = 1;
    for (let y = n - 1; y >= 0; y--) {
        for (let x = m - 1; x >= 0; x--) {
            if (y === n - 1 && x === m - 1)
                continue;
            const yValue = dp[y + 1] ? dp[y + 1][x] : 0;
            const xValue = dp[y][x + 1] || 0;
            dp[y][x] = yValue + xValue;
        }
    }
    return dp[0][0];
};
// console.log(uniquePaths(7, 3))

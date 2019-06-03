/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (32.88%)
 * Total Accepted:    175.4K
 * Total Submissions: 529.6K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid: number[][]) {
  const n = obstacleGrid.length
  const m = obstacleGrid[0].length
  if (n === 1 && m === 1) return obstacleGrid[0][0] === 1 ? 0 : 1
  if (obstacleGrid[n - 1][m - 1] === 1) return 0
  const dp = new Array(n).fill(true).map(() => new Array(m))
  dp[n - 1][m - 1] = 1
  for (let y = n - 1; y >= 0; y--) {
    for (let x = m - 1; x >= 0; x--) {
      if (y === n - 1 && x === m - 1) continue
      const yValue = dp[y + 1] ? dp[y + 1][x] : 0
      const xValue = dp[y][x + 1] || 0
      dp[y][x] = obstacleGrid[y][x] === 1 ? 0 : yValue + xValue
    }
  }
  return dp[0][0]
};

// console.log(uniquePathsWithObstacles([
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 1, 0],
// ]))
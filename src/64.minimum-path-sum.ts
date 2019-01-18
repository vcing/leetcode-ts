/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (44.13%)
 * Total Accepted:    199.3K
 * Total Submissions: 444.8K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
// backtracking too slow
// var minPathSum = function (grid: number[][]) {
//   // const steps = grid.length + grid[0].length - 2
//   const width = grid[0].length
//   const height = grid.length

//   let result = Infinity

//   const nextStep = (x: number, y: number, sum: number): number => {
//     if (sum > result) return Infinity
//     let xSum = Infinity
//     let ySum = Infinity
//     if (x === 0 && y === 0) {
//       const answer = sum + grid[0][0]
//       if (answer < result) result = answer
//     }
//     if (x > 0) xSum = nextStep(x - 1, y, sum + grid[y][x])
//     if (y > 0) ySum = nextStep(x, y - 1, sum + grid[y][x])
//     return Math.min(xSum, ySum)
//   }
//   nextStep(width - 1, height - 1, 0)
//   return result
// };

// const minPathSum = function (grid: number[][]) {
//   const m = grid[0].length
//   const n = grid.length
//   const dp = new Array(n).fill(true).map(() => new Array(m))
//   dp[n - 1][m - 1] = grid[n - 1][m - 1]
//   for (let i = n - 2; i >= 0; i--) dp[i][m - 1] = grid[i][m - 1] + dp[i + 1][m - 1]
//   for (let j = m - 2; j >= 0; j--) dp[n - 1][j] = grid[n - 1][j] + dp[n - 1][j + 1]
//   for (let i = n - 2; i >= 0; i--) {
//     for (let j = m - 2; j >= 0; j--) {
//       dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1])
//     }
//   }
//   return dp[0][0]
// }

const minPathSum = function (grid: number[][]) {
  const m = grid[0].length
  const n = grid.length
  for (let i = n - 2; i >= 0; i--) grid[i][m - 1] += grid[i + 1][m - 1]
  for (let j = m - 2; j >= 0; j--) grid[n - 1][j] += grid[n - 1][j + 1]
  for (let i = n - 2; i >= 0; i--) for (let j = m - 2; j >= 0; j--) grid[i][j] += Math.min(grid[i + 1][j], grid[i][j + 1])
  return grid[0][0]
}

// console.log(minPathSum([
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ]))

// console.log(minPathSum([[3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3], [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2], [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9], [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7], [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8], [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9], [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1], [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3], [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3], [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8], [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3], [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3], [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3], [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5], [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2], [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0], [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0], [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7]]))
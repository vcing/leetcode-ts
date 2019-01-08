/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 *
 * https://leetcode.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (45.20%)
 * Total Accepted:    211K
 * Total Submissions: 461.4K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * You are given an n x n 2D matrix representing an image.
 * 
 * Rotate the image by 90 degrees (clockwise).
 * 
 * Note:
 * 
 * You have to rotate the image in-place, which means you have to modify the
 * input 2D matrix directly. DO NOT allocate another 2D matrix and do the
 * rotation.
 * 
 * Example 1:
 * 
 * 
 * Given input matrix = 
 * [
 * ⁠ [1,2,3],
 * ⁠ [4,5,6],
 * ⁠ [7,8,9]
 * ],
 * 
 * rotate the input matrix in-place such that it becomes:
 * [
 * ⁠ [7,4,1],
 * ⁠ [8,5,2],
 * ⁠ [9,6,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Given input matrix =
 * [
 * ⁠ [ 5, 1, 9,11],
 * ⁠ [ 2, 4, 8,10],
 * ⁠ [13, 3, 6, 7],
 * ⁠ [15,14,12,16]
 * ], 
 * 
 * rotate the input matrix in-place such that it becomes:
 * [
 * ⁠ [15,13, 2, 5],
 * ⁠ [14, 3, 4, 1],
 * ⁠ [12, 6, 8, 9],
 * ⁠ [16, 7,10,11]
 * ]
 * 
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix: number[][]) {
  if (matrix.length <= 1) return matrix
  for (let j = 0; j <= (Math.floor(matrix.length) / 2) - 1; j++) {
    for (let i = 0; i < Math.ceil(matrix.length / 2); i++) {
      // const i = 0
      const tmp = matrix[j][i]
      const ni = matrix.length - i - 1
      const nj = matrix.length - j - 1
      matrix[j][i] = matrix[ni][j]
      matrix[ni][j] = matrix[nj][ni]
      matrix[nj][ni] = matrix[i][nj]
      matrix[i][nj] = tmp
    }
  }
  return matrix
};


// console.log(rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16]
// ]))

// console.log(rotate([
//   [1, 2],
//   [4, 3]
// ]))

// console.log(rotate([
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]))

// [4,1]
// [3,2]
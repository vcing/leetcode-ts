/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 *
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (34.46%)
 * Total Accepted:    199.5K
 * Total Submissions: 576.7K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 * 
 * 
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the
 * previous row.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * Output: false
 * 
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix: number[][], target: number): boolean {
//   if (matrix.length === 0 || matrix[0].length === 0) return false
//   if (matrix.length === 1) return matrix[0].indexOf(target) !== -1
//   const y = Math.floor(matrix.length / 2)
//   const firstNumber = matrix[y][0]
//   if (firstNumber === target) return true
//   else if (matrix[y].indexOf(target) !== -1) return true
//   else if (firstNumber > target) return searchMatrix(matrix.slice(0, y), target)
//   else if (firstNumber < target) return searchMatrix(matrix.slice(y + 1), target)
// };

var searchMatrix = function (matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) return false
  if (matrix.length === 1) return matrix[0].indexOf(target) !== -1
  let left = 0
  let right = matrix.length - 1
  while (right > left) {
    const binary = Math.floor((left + right) / 2)
    if (matrix[binary][0] === target) return true
    else if (matrix[binary][0] < target && matrix[binary + 1][0] > target) return matrix[binary].indexOf(target) !== -1
    else if (matrix[binary][0] > target) right = binary - 1
    else if (matrix[binary][0] < target) left = binary + 1
  }
  return matrix[left].indexOf(target) !== -1
};

// console.log(searchMatrix([
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ], 15))

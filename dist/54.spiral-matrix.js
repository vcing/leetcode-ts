/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (28.81%)
 * Total Accepted:    196.3K
 * Total Submissions: 674.3K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 *
 * Example 1:
 *
 *
 * Input:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 *
 * Input:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix, n = 0) {
    if (matrix.length === 0)
        return [];
    const width = matrix[0].length;
    const height = matrix.length;
    if (height === 1)
        return matrix[0];
    const nextWidth = width - 2 - n * 2;
    const nextHeight = height - 2 - n * 2;
    let result = matrix[n].slice(n, width - n);
    result = result.concat(matrix.slice(n + 1, height - 1 - n).map(a => a[width - n - 1]));
    result = result.concat(matrix[height - 1 - n].slice(n, width - n).reverse());
    if (width !== 1)
        result = result.concat(matrix.slice(n + 1, height - 1 - n).map(a => a[n]).reverse());
    // console.log(nextWidth, nextHeight, result)
    if (nextWidth > 1 && nextHeight > 1)
        return result.concat(spiralOrder(matrix, n + 1));
    else if (nextWidth === 1 && nextHeight > 0)
        return result.concat(matrix.slice(n + 1, height - 1 - n).map(a => a[width - n - 2]));
    else if (nextHeight === 1 && nextWidth > 0)
        return result.concat(matrix[n + 1].slice(n + 1, width - n - 1));
    else
        return result;
};
// console.log(spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
//   [17, 18, 19, 20],
// ]))
// console.log(spiralOrder([
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
//   [26, 27, 28, 29, 30],
// ]))
// console.log(spiralOrder([[1]]))
// console.log(spiralOrder([[7], [9], [6]]))
// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

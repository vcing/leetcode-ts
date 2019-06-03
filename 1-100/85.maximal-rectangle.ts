/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 *
 * https://leetcode.com/problems/maximal-rectangle/description/
 *
 * algorithms
 * Hard (31.55%)
 * Total Accepted:    108.8K
 * Total Submissions: 339.1K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle
 * containing only 1's and return its area.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
  ["1","0","1","0","0"],
 * ⁠ ["1","0","1","1","1"],
 * ⁠ ["1","1","1","1","1"],
 * ⁠ ["1","0","0","1","0"]
 * ]
 * Output: 6
 * 
 * 
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix: string[][]) {
  let result = 0
  const findMax = (y: number, x: number) => {
    let r = 0
    let maxX = Infinity
    for (let i = 0; i + y < matrix.length && matrix[i + y][x] === '1'; i++) {
      let mx = 0
      for (let j = 0; ((j + x) < matrix[0].length) && (matrix[i + y][j + x] === '1') && j < maxX; j++) {
        mx = j + 1
        // if (y === 0 && x === 0) console.log(i, j)
        r = Math.max(r, (i + 1) * (j + 1))
      }
      maxX = Math.min(mx, maxX)
      // if (y === 0 && x === 0) console.log(maxX)
    }
    // console.dir(map)
    // console.log(r, y, x)
    result = Math.max(result, r)
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '1') findMax(i, j)
    }
  }
  return result
};

// console.log(maximalRectangle([
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"]
// ]))
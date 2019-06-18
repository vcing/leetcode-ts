/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (39.39%)
 * Total Accepted:    184.3K
 * Total Submissions: 465.8K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle, find the minimum path sum from top to bottom. Each step
 * you may move to adjacent numbers on the row below.
 * 
 * For example, given the following triangle
 * 
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 * 
 * Note:
 * 
 * Bonus point if you are able to do this using only O(n) extra space, where n
 * is the total number of rows in the triangle.
 * 
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle: number[][]) {
  for(let i = 1; i < triangle.length; i++) {
    for( let j = 0; j < triangle[i].length; j++ ) {
      if(j === 0) triangle[i][j] += triangle[i - 1][j]
      else if(j === triangle[i].length - 1) triangle[i][j] += triangle[i - 1][j - 1]
      else triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1])
    }
  } 
  // console.log(triangle)
  return Math.min(...triangle[triangle.length - 1])
};

// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))

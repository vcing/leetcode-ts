/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (46.09%)
 * Total Accepted:    257.3K
 * Total Submissions: 556.3K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows: number): number[][] {
  if(numRows < 1) return []
  const result = [[1]]
  for (let i = 1; i < numRows; i++) {
    const row = []
    for(let j = 1; j < i; j++) {
      row.push(result[i - 1][j - 1] + result[i - 1][j]) 
    } 
    row.unshift(1)
    row.push(1)
    result.push(row)
  } 
  return result
};

// console.log(generate(5))

/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (44.08%)
 * Total Accepted:    122.9K
 * Total Submissions: 275.5K
 * Testcase Example:  '3'
 *
 * Given a positive integer n, generate a square matrix filled with elements
 * from 1 to n2 in spiral order.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n: number) {
  return generateSpiral([], n * n)
};

const generateSpiral = (result: number[][], end?: number): number[][] => {
  if (end === 0) return result
  if (result.length === 0) {
    if (end % 2 === 1) return generateSpiral([[end]], end - 1)
    return generateSpiral([[end - 3, end - 2], [end, end - 1]], end - 4)
  } else {
    const n = result.length
    result.push(new Array(n + 2))
    result.unshift(new Array(n + 2))
    const nstart = result[1][0]
    const nend = nstart - (n + 1) * 4 - 1
    for (let i = 1; i <= n; i++) {
      result[i].unshift(nstart - i)
      result[i].push(nend + result.length + i)
    }
    for (let i = 0; i < n + 2; i++) {
      result[0][i] = nend + 1 + i
      result[result.length - 1][i] = nstart - n - i - 1
    }
    if (nend === 0) return result
    return generateSpiral(result)
  }
}

// console.log(generateMatrix(3))

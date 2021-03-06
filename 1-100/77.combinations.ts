/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (44.62%)
 * Total Accepted:    179.5K
 * Total Submissions: 396K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: n = 4, k = 2
 * Output:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n: number, k: number) {
  const result: number[][] = []
  const max = n - k + 1
  const backtracking = (current: number[], start: number) => {
    if (current.length === k) {
      result.push(current)
      return
    }
    for (let i = start; i <= max + current.length; i++) backtracking(current.concat(i), i + 1)
  }

  backtracking([], 1)
  return result
};

// console.log(combine(5, 3))
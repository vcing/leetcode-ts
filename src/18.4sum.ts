/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (28.85%)
 * Total Accepted:    195K
 * Total Submissions: 674.6K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums: number[], target: number) {
  const result: number[][] = []
  nums = nums.sort((a, b) => a - b)
  nums.forEach((n, i) => {
    if (i > 0 && n === nums[i - 1]) return
    nums.slice(i + 1).forEach((nn, ii) => {
      if (ii > 0 && nn === nums[i + ii]) return
      nums.slice(i + ii + 2).forEach((nnn, iii) => {
        if (iii > 0 && nnn === nums[i + ii + iii + 1]) return
        nums.slice(i + ii + iii + 3).forEach((nnnn, iiii) => {
          if (iiii > 0 && nnnn === nums[i + ii + iii + iiii + 2]) return
          if (n + nn + nnn + nnnn === target) result.push([n, nn, nnn, nnnn])
        })
      })
    })
  })
  return result
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
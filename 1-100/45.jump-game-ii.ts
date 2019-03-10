/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (26.61%)
 * Total Accepted:    144K
 * Total Submissions: 538.1K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Your goal is to reach the last index in the minimum number of jumps.
 * 
 * Example:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * Note:
 * 
 * You can assume that you can always reach the last index.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums: number[]) {
  if (nums.length <= 1) return 0
  let left = 0
  let right = nums[left]
  let result = 1
  while (right < nums.length - 1) {
    let max = 0
    let index = 0
    for (let i = left + 1; i <= right; i++) {
      const dist = nums[i] + i
      if (dist > max) {
        max = dist
        index = i
      }
    }
    // console.log(max, index)
    left = index
    if (left + nums[left] >= nums.length - 1) right = nums.length - 1
    else right = left + nums[left]
    result++
    // console.log('\n')
  }
  return result
};

// console.log(jump([2, 3, 1, 1, 4, 2, 6, 1, 1, 1, 1, 1, 1, 1]))
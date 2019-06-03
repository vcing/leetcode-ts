/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (32.33%)
 * Total Accepted:    338.8K
 * Total Submissions: 1M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums: number[], target: number) {
  if (nums.length < 2) return nums[0] === target ? 0 : -1
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    // console.log(left, right)
    const mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] > nums[left]) {
      if (nums[mid] > target && nums[left] <= target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] >= nums[right]) {
        if (nums[right] === target) return right
        break
      } else if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 2))
// console.log(search([3, 1], 1))

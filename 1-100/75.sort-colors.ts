/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (40.53%)
 * Total Accepted:    281K
 * Total Submissions: 686.4K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * Given an array with n objects colored red, white or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order
 * red, white and blue.
 * 
 * Here, we will use the integers 0, 1, and 2 to represent the color red,
 * white, and blue respectively.
 * 
 * Note: You are not suppose to use the library's sort function for this
 * problem.
 * 
 * Example:
 * 
 * 
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * 
 * Follow up:
 * 
 * 
 * A rather straight forward solution is a two-pass algorithm using counting
 * sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then
 * overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with a one-pass algorithm using only constant space?
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums: number[]) {
  let left = 0
  let right = nums.length - 1
  function swap(l: number, r: number) {
    let t = nums[l];
    nums[l] = nums[r];
    nums[r] = t;
  }
  // while (nums[left] === 0) left++
  // while (nums[right] === 2) right--
  for (let i = left; i <= right; i = i >= left ? i + 1 : left) {
    const current = nums[i]
    if (current === 0) {
      swap(i--, left)
      while (nums[left] === 0) left++
    } else if (current === 2) {
      swap(i--, right)
      while (nums[right] === 2) right--
    }
  }
  return nums
};

// var sortColors = function (nums: number[]) {
//   let left = 0
//   let right = nums.length - 1
//   let middle = 0
//   function swap(l: number, r: number) {
//     let t = nums[l];
//     nums[l] = nums[r];
//     nums[r] = t;
//   }
//   while (left < right) {
//     if (nums[left] === 0) left++
//     else if (nums[right] === 2) right--
//     else {
//       if (nums[left] === 2 || nums[right] === 0) swap(left, right)
//       else {
//         if (middle <= 1) middle = left + 1
//         while (nums[middle] === 1) middle++
//         if (middle >= right) break;
//         else if (nums[middle] === 0) swap(left, middle)
//         else swap(right, middle)
//       }
//     }
//   }
//   return nums
// };

// console.log(sortColors([1, 2, 0]))
// console.log(sortColors([2, 0, 1]))
// console.log(sortColors([2, 0, 2, 1, 1, 0]))
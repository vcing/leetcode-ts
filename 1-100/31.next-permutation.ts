/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 *
 * https://leetcode.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (29.54%)
 * Total Accepted:    195.8K
 * Total Submissions: 661.4K
 * Testcase Example:  '[1,2,3]'
 *
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 * 
 * If such arrangement is not possible, it must rearrange it as the lowest
 * possible order (ie, sorted in ascending order).
 * 
 * The replacement must be in-place and use only constant extra memory.
 * 
 * Here are some examples. Inputs are in the left-hand column and its
 * corresponding outputs are in the right-hand column.
 * 
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums: number[]) {
  const swap = (nums: number[], i: number, j: number): void => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  const reverse = (nums: number[], start: number): void => {
    let i = start; let j = nums.length - 1;
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }
  }

  let f
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      f = i;
      break;
    }
  }

  if (f >= 0) {
    let larger = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > nums[f]) {
        larger = i;
        break;
      }
    }
    swap(nums, f, larger);
  }

  reverse(nums, f + 1);
  return nums
};


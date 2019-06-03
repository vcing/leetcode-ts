/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (33.99%)
 * Total Accepted:    318.8K
 * Total Submissions: 922.7K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 * 
 * Note:
 * 
 * 
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function (nums1: number[], m: number, nums2: number[], n: number) {
  let currentLength = m
  const insert = (index: number, value: number) => {
    for (let i = currentLength; i >= index; i--) {
      nums1[i] = nums1[i - 1]
    }
    nums1[index] = value
    currentLength++
  }

  let left = n
  let n1Index = 0
  let n2Index = 0
  while (left > 0) {
    if (nums1[n1Index] < nums2[n2Index]) {
      n1Index++
    } else {
      // console.log('insert:', n1Index, nums2[n2Index], currentLength)
      insert(n1Index >= nums1.length ? currentLength : n1Index, nums2[n2Index])
      n2Index++
      n1Index++
      left--
    }
  }
  return nums1
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (24.59%)
 * Total Accepted:    341.4K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 *
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 *
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 *
 * Example 2:
 *
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1: number[], nums2: number[]): number {
//   const totalArray = nums1.concat(nums2)
//   totalArray.sort((a, b) => a - b)
//   const totalLength = totalArray.length
//   if (totalLength % 2 === 0) {
//     return (totalArray[totalLength / 2] + totalArray[(totalLength / 2) - 1]) / 2
//   } else {
//     return totalArray[Math.floor(totalLength / 2)]
//   }
// };
var findMedianSortedArrays = function (nums1, nums2) {
    const totalArray = nums1.concat(nums2);
    totalArray.sort((a, b) => a - b);
    const totalLength = totalArray.length;
    if (totalLength % 2 === 0) {
        return (totalArray[totalLength / 2] + totalArray[(totalLength / 2) - 1]) / 2;
    }
    else {
        return totalArray[Math.floor(totalLength / 2)];
    }
};

/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (22.51%)
 * Total Accepted:    431.3K
 * Total Submissions: 1.9M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums: number[]) {
//   const negative = nums.filter(n => n < 0).sort((a, b) => a - b)
//   const positive = nums.filter(n => n > 0).sort((a, b) => a - b)
//   const zeros = nums.filter(n => n === 0)
//   console.log(negative, positive)
//   const result = []
//   let ni = 0
//   let pi = positive.length - 1
//   while (ni < negative.length && pi >= 0) {
//     let n = negative[ni]
//     let p = positive[pi]
//     if (-n > 2 * p) {
//       ni++
//       continue
//     }
//     if (-n === 2 * p) {
//       if (positive[pi - 1] === p) result.push([n, p, p])
//       ni++
//       continue
//     }
//     if (-n > p) {
//       if (positive.indexOf(-n - p) !== -1) result.push([n, p, -n - p])
//       ni++
//       continue
//     }
//     if (p > 2 * -n) {
//       pi--
//       continue
//     }
//     if (p === 2 * -n) {
//       if (negative[ni + 1] === n) result.push([n, n, p])
//       pi--
//       continue
//     }
//     if (p > -n) {
//       if (negative.indexOf(p + n) !== -1) result.push([n, p + n, p])
//       pi--
//       continue
//     }
//     if (p === -n) {
//       if (zeros.length > 0) result.push([n, p, 0])
//       n++
//       continue
//     }
//   }
// };

// var threeSum = function (nums: number[]) {
//   const result: number[][] = []
//   if (nums.filter(n => n === 0).length >= 3) result.push([0, 0, 0])
//   const r = new Set<string>()
//   console.time('sort')
//   nums = nums.sort((a, b) => a - b)
//   console.timeEnd('sort')
//   const positive = nums.filter(n => n > 0)
//   console.time('calc')
//   nums.filter(n => n < 0).forEach((num, index) => {
//     if (-num > 2 * nums[nums.length - 1]) return
//     const _nums = nums.slice(index + 1)
//     _nums.forEach((n, index) => {
//       const __nums = n > 0 ? _nums.slice(index + 1) : positive
//       const p = __nums.find(p => n + p + num === 0)
//       if (p === undefined) return
//       const _result = [num, n, p]
//       if (!r.has(_result.toString())) {
//         result.push(_result)
//         r.add(_result.toString())
//       }

//     })
//   })
//   console.timeEnd('calc')
//   return result
// }
var threeSum = function (nums: number[]) {
  const result: number[][] = []
  if (nums.filter(n => n === 0).length >= 3) result.push([0, 0, 0])
  nums = nums.sort((a, b) => a - b)
  nums.slice(0, nums.findIndex(n => n >= 0)).forEach((num, index) => {
    if (-num > 2 * nums[nums.length - 1]) return
    if (index > 0 && num === nums[index - 1]) return
    for (let i = index + 1, j = nums.length - 1; i < j;) {
      if (nums[i] + nums[j] + num === 0) {
        result.push([num, nums[i], nums[j]])
        while (nums[i] === nums[i + 1]) i++
        while (nums[j] === nums[j - 1]) j--
        i++
        j--
      } else if (nums[i] + nums[j] + num > 0) {
        j--
      } else {
        i++
      }
    }
  })
  return result
}
// console.log(threeSum([-2, 0, 1, 1, 2]))
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([3, 0, -2, -1, 1, 2]))
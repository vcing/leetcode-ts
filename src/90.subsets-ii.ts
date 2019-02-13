/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (40.49%)
 * Total Accepted:    185.4K
 * Total Submissions: 450K
 * Testcase Example:  '[1,2,2]'
 *
 * Given a collection of integers that might contain duplicates, nums, return
 * all possible subsets (the power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,2]
 * Output:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// failed cannot remove duplicated result
// var subsetsWithDup = function (nums: number[]) {
//   const result: number[][] = []
//   const backTracking = (current: number[], length: number, start: number) => {
//     if (length === 0) return result.push([])
//     if (current.length === length) result.push(current)
//     if (start >= nums.length) return
//     for (let i = start; i < nums.length; i++) {
//       const lastResult = result[result.length - 1]
//       const lastNumber = current[current.length - 1]
//       // if (nums[i] !== current[current.length - 1] && nums[i] === nums[i - 1]) continue
//       console.log(length, current, lastResult[current.length], nums[i])
//       if (lastResult[current.length] === nums[i]) continue
//       backTracking([...current, nums[i]], length, i + 1)
//     }
//   }

//   for (let i = 0; i <= nums.length; i++) backTracking([], i, 0)
//   // backTracking([], 3, 0)
//   return result
// };

var subsetsWithDup = function (nums: number[]) {
  let start: number[] = []
  let result: number[][] = nums.sort().map((n, index) => {
    if (n === nums[index - 1]) return
    start.push(index)
    return [n]
  })
  result = result.filter(n => !!n)
  let last = result
  for (let i = 2; i <= nums.length; i++) {
    const _result: number[][] = []
    const _start: number[] = []
    last.forEach((r, index) => {
      let lastIndex = start[index]
      // console.log(lastIndex, r)
      if (lastIndex === nums.length - 1) return
      for (let index = lastIndex + 1; index < nums.length; index++) {
        const lastResult = _result[_result.length - 1]
        const lastResultNumber = index !== lastIndex + 1 && lastResult[lastResult.length - 1]
        if (lastResultNumber === nums[index]) continue
        _result.push([...r, nums[index]])
        _start.push(index)
      }
    })
    start = _start
    last = _result
    result = result.concat(last)
  }
  result.unshift([])
  return result
}

// console.log(subsetsWithDup([1, 2, 3, 3, 4, 4]))
// console.log(subsetsWithDup([1, 2, 2]))
// console.log(subsetsWithDup([1, 1, 2]))
// console.log(subsetsWithDup([4,4,4,1,4]))

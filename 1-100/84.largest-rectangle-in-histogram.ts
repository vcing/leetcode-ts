/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 *
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (29.40%)
 * Total Accepted:    153.7K
 * Total Submissions: 513.6K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * Given n non-negative integers representing the histogram's bar height where
 * the width of each bar is 1, find the area of largest rectangle in the
 * histogram.
 * 
 * 
 * 
 * 
 * Above is a histogram where width of each bar is 1, given height =
 * [2,1,5,6,2,3].
 * 
 * 
 * 
 * 
 * The largest rectangle is shown in the shaded area, which has area = 10
 * unit.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: [2,1,5,6,2,3]
 * Output: 10
 * 
 * 
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights: number[]) {
  heights.push(0)
  let ret = 0
  const stack = [[0, -1]]
  let top = 0
  heights.forEach((height, index) => {
    let memoIndex = index
    while (stack[top][0] > height) {
      const [h, i] = stack.pop()
      ret = Math.max(ret, (index - i) * h)
      memoIndex = i
      top--
    }
    if (stack[top][0] < height) {
      stack.push([height, memoIndex])
      top++
    }
  })

  return ret
};

// console.log(largestRectangleArea([3, 2, 5, 6, 2, 3]))
// console.log(largestRectangleArea([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]))

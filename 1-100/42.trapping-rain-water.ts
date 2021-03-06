/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (40.37%)
 * Total Accepted:    230.7K
 * Total Submissions: 568.3K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height: number[]) {
//   let left = 0
//   let right = left + 1
//   let result = 0
//   while (right < height.length) {
//     if (height[left] === 0 || height[left] <= height[right]) right = ++left + 1
//     else {
//       let rightIndex = right
//       for (let i = right + 1; i < height.length; i++) {
//         if (height[i] >= height[left]) {
//           rightIndex = i
//           break;
//         } else if (height[i] > height[rightIndex]) rightIndex = i
//       }
//       if (rightIndex === right) right = ++left + 1
//       else {
//         const waterLevel = Math.min(height[left], height[rightIndex])
//         height.slice(left + 1, rightIndex).forEach(h => result += (waterLevel - h))
//         left = rightIndex
//         right = left + 1
//       }
//     }
//   }
//   return result
// };

// var trap = function (height: number[]) {
//   const stack = []
//   let result = 0
//   let current = 0
//   while (current < height.length) {
//     // console.log(stack)
//     while (stack.length > 0 && height[current] > height[stack[stack.length - 1]]) {
//       const top = stack.pop()
//       if (stack.length === 0) break
//       const distance = current - stack[stack.length - 1] - 1
//       const boundHeight = Math.min(height[current], height[stack[stack.length - 1]]) - height[top]
//       result += distance * boundHeight
//     }
//     stack.push(current++)
//   }
//   return result
// }

var trap = function (height: number[]) {
  let result = 0
  const leftMax = [height[0]]
  const rightMax = []
  rightMax[height.length - 1] = height[height.length - 1]
  for (let i = 1; i < height.length; i++)
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
  for (let i = height.length - 2; i >= 0; i--)
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
  for (let i = 0; i < height.length; i++)
    result += (Math.min(leftMax[i], rightMax[i]) - height[i])
  return result
}

// console.log(trap([4, 2, 0, 3, 2, 5]))
// console.log(trap([4, 2, 0, 3, 2, 5]))

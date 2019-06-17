/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (43.62%)
 * Total Accepted:    206.7K
 * Total Submissions: 471.7K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex: number) {
//   const c = (m:number, n:number):number => {
//     if(m === 0 || n - m === 0) return 1
//     if(m === 1 || n - m === 1) return n
//     return c(m, n - 1) + c(m - 1, n - 1)
//   }

//   let result = []
//   for(let i = 0; i < (rowIndex + 1)/2; i++ ) {
//     result.push(c(i, rowIndex))
//   }

//   if(rowIndex % 2 === 0) result = [...result, ...result.slice(0, -1).reverse()]
//   else result = [...result, ...result.reverse()] 

//   return result
// };

var getRow = function(rowIndex: number) {
  const numRows = rowIndex + 1
  if(numRows === 1) return [1]
  let current:number[] = []
  let prev:number[] = []
  for (let i = 1; i < numRows; i++) {
    for(let j = 1; j < i; j++) {
      current.push(prev[j - 1] + prev[j]) 
    } 
    current.unshift(1)
    current.push(1)
    prev = current
    current = []
  } 
  return prev
}

// console.log(getRow(33))

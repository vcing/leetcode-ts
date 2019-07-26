/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 *
 * https://leetcode.com/problems/candy/description/
 *
 * algorithms
 * Hard (28.40%)
 * Total Accepted:    106K
 * Total Submissions: 368K
 * Testcase Example:  '[1,0,2]'
 *
 * There are N children standing in a line. Each child is assigned a rating
 * value.
 * 
 * You are giving candies to these children subjected to the following
 * requirements:
 * 
 * 
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * 
 * 
 * What is the minimum candies you must give?
 * 
 * Example 1:
 * 
 * 
 * Input: [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2,
 * 1, 2 candies respectively.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1,
 * 2, 1 candies respectively.
 * ⁠            The third child gets 1 candy because it satisfies the above two
 * conditions.
 * 
 * 
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings: number[]) {
  const l2r = []
  const r2l = []
  for( let i = 0; i < ratings.length; i++ ) {
    const ri = ratings.length - i - 1
    if(i === 0) {
      l2r.push(1)
      r2l.unshift(1)
      continue
    }
    if(ratings[i] > ratings[i - 1]) l2r.push(l2r[i - 1] + 1)
    if(ratings[ri] > ratings[ri + 1]) r2l.unshift(r2l[0] + 1)
    if(ratings[i] <= ratings[i - 1]) l2r.push(1)
    if(ratings[ri] <= ratings[ri + 1]) r2l.unshift(1)
  }

  let result = 0
  for(let i = 0; i < ratings.length; i++) {
    result += Math.max(l2r[i], r2l[i]) 
  }
  console.log(l2r, r2l) 
  return result
};

console.log(candy([1,2,3,1,1,3,5,3,2,3,1]))
console.log(candy([1,0,2]))
console.log(candy([1,2,87,87,87,2,1]))

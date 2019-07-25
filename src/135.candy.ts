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
  const cost = new Array(ratings.length).fill(0) 
  for(let i = 0; i < ratings.length - 1; i++) {
    if( ratings[i] > ratings[i + 1] ) cost[i]--
    else if( ratings[i] < ratings[i + 1] ) cost[i]++
  }
  return cost.reduce((prev, curr) => {
    if(curr === 0) return prev + 1
    if( curr < 0 ) return prev + -curr + 1
    return prev + curr
  }, 0)
};

// console.log(candy([1,2,1,1,2,1]))

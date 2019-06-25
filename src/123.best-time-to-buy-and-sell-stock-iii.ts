/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
 *
 * algorithms
 * Hard (33.71%)
 * Total Accepted:    152.1K
 * Total Submissions: 448.6K
 * Testcase Example:  '[3,3,5,0,0,3,1,4]'
 *
 * Say you have an array for which the ith element is the price of a given
 * stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete at most two
 * transactions.
 * 
 * Note: You may not engage in multiple transactions at the same time (i.e.,
 * you must sell the stock before you buy again).
 * 
 * Example 1:
 * 
 * 
 * Input: [3,3,5,0,0,3,1,4]
 * Output: 6
 * Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit
 * = 3-0 = 3.
 * Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 =
 * 3.
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit
 * = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you
 * are
 * engaging multiple transactions at the same time. You must sell before buying
 * again.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices:number[]) {
  if(prices.length === 0) return 0
  let lmin = prices[0]
  const ldp = [0]
  for(let i in prices) {
    if(i === '0') continue
    const delta = prices[i] - lmin
    ldp[i] = delta > 0 ? delta : 0
    lmin = Math.min(prices[i], lmin)
  }

  const length = prices.length
  let rmax = prices[length - 1]
  const rdp = []
  for(let ri in prices) {
    if(ri === '0') continue
    const i = length - parseInt(ri) - 1 
    const delta = rmax - prices[i]
    rdp[i] = delta > 0 ? delta : 0
    rmax = Math.max(prices[i], rmax)
  }
  rdp.push(0)

  const result:number[] = []
  for(let i = 0; i < length; i++) 
    result[i] = Math.max(Math.max(...ldp.slice(0, i)) + Math.max(...rdp.slice(i)), Math.max(...rdp))

  // console.log(result,ldp, rdp)
  return Math.max(...result)

};


// console.log( maxProfit2([3,3,5,0,0,3,1,4]) )
// console.log( maxProfit2([1,2,3,4,5]) )
// console.log( maxProfit2([3,2,6,5,0,3]) )
// console.log( maxProfit2([7,6,4,3,1]) )

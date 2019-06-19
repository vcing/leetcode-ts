/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (47.27%)
 * Total Accepted:    511.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the ith element is the price of a given
 * stock on day i.
 *
 * If you were only permitted to complete at most one transaction (i.e., buy
 * one and sell one share of the stock), design an algorithm to find the
 * maximum profit.
 *
 * Note that you cannot sell a stock before you buy one.
 *
 * Example 1:
 *
 *
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 *
 *
 * Example 2:
 *
 *
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 *
 *
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length <= 1)
        return 0;
    if (prices.length === 2)
        return prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0;
    let buyPointer = 0;
    let sellPointer = 1;
    let result = 0;
    while (sellPointer <= prices.length - 1) {
        while (prices[sellPointer + 1] && prices[sellPointer + 1] > prices[sellPointer])
            sellPointer++;
        while (buyPointer + 1 < sellPointer && prices[buyPointer + 1] < prices[buyPointer])
            buyPointer++;
        const delta = prices[sellPointer] - prices[buyPointer];
        if (delta > result)
            result = delta;
        sellPointer++;
        if (prices[buyPointer] > prices[sellPointer])
            buyPointer = sellPointer++;
    }
    while (buyPointer++ < sellPointer) {
        const delta = prices[sellPointer] - prices[buyPointer];
        if (delta > result)
            result = delta;
    }
    return result;
};
// console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([7,6,4,3,1]))

/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 *
 * https://leetcode.com/problems/gray-code/description/
 *
 * algorithms
 * Medium (44.18%)
 * Total Accepted:    124.6K
 * Total Submissions: 279K
 * Testcase Example:  '2'
 *
 * The gray code is a binary numeral system where two successive values differ
 * in only one bit.
 * 
 * Given a non-negative integer n representing the total number of bits in the
 * code, print the sequence of gray code. A gray code sequence must begin with
 * 0.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: [0,1,3,2]
 * Explanation:
 * 00 - 0
 * 01 - 1
 * 11 - 3
 * 10 - 2
 * 
 * For a given n, a gray code sequence may not be uniquely defined.
 * For example, [0,2,3,1] is also a valid gray code sequence.
 * 
 * 00 - 0
 * 10 - 2
 * 11 - 3
 * 01 - 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0
 * Output: [0]
 * Explanation: We define the gray code sequence to begin with 0.
 * A gray code sequence of n has size = 2n, which for n = 0 the size is 20 =
 * 1.
 * Therefore, for n = 0 the gray code sequence is [0].
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n: number) {
  if (n === 0)
    return [0];
  if (n === 1)
    return [0, 1];
  let arr = ['00', '01', '11', '10'];
  n -= 2;
  while (n--) {
    const arr1 = arr.map(a => 0 + a);
    const arr2 = arr.map(a => 1 + a).reverse();
    arr = arr1.concat(arr2);
  }
  return arr.map(a => parseInt(a, 2));
};

// console.log(grayCode(3))

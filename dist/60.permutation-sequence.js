/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 *
 * https://leetcode.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (31.34%)
 * Total Accepted:    124.2K
 * Total Submissions: 391.9K
 * Testcase Example:  '3\n3'
 *
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 *
 * By listing and labeling all of the permutations in order, we get the
 * following sequence for n = 3:
 *
 *
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 *
 *
 * Given n and k, return the kth permutation sequence.
 *
 * Note:
 *
 *
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3, k = 3
 * Output: "213"
 *
 *
 * Example 2:
 *
 *
 * Input: n = 4, k = 9
 * Output: "2314"
 *
 *
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const facts = {
    1: 1,
    2: 2,
    3: 6,
    4: 24,
    5: 120,
    6: 720,
    7: 5040,
    8: 40320,
    9: 362880
};
var getPermutation = function (n, k) {
    let left = k - 1;
    const indexes = [];
    for (let i = n; i > 1; i--) {
        indexes.push(Math.floor(left / facts[i - 1]));
        left = left % facts[i - 1];
    }
    const tmp = new Array(n).fill(true).map((v, i) => i + 1);
    return indexes.reduce((prev, curr) => {
        const number = tmp.splice(curr, 1);
        return prev + number;
    }, '') + tmp[0];
};
// const fact = (n: number): number => {
//   const result = n === 2 ? 2 : n * fact(n - 1)
//   facts[n] = result
//   return result
// }
// fact(9)
// console.log(facts)
// console.log(getPermutation(4, 9))

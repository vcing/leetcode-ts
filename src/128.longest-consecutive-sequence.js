/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Hard (41.71%)
 * Total Accepted:    216.3K
 * Total Submissions: 513.6K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 *
 * Your algorithm should run in O(n) complexity.
 *
 * Example:
 *
 *
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
 * Therefore its length is 4.
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0)
        return 0;
    let length = 1;
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let result = 1;
        let active = -1;
        let negative = -1;
        let activeN = n;
        let negativeN = n;
        while ((active = nums.indexOf(activeN + 1)) !== -1) {
            activeN = nums.splice(active, 1)[0];
            result++;
        }
        while ((negative = nums.indexOf(negativeN - 1)) !== -1) {
            negativeN = nums.splice(negative, 1)[0];
            result++;
        }
        if (result > length)
            length = result;
    }
    return length;
};
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

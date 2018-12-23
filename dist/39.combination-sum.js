/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (44.99%)
 * Total Accepted:    280.2K
 * Total Submissions: 619.8K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 *
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
 *
 * Note:
 *
 *
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 *
 *
 * Example 1:
 *
 *
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 *
 *
 * Example 2:
 *
 *
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *
 *
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];
    candidates = candidates.sort((a, b) => a - b);
    if (candidates[candidates.length - 1] === target) {
        result.push([candidates[candidates.length - 1]]);
        candidates.splice(candidates.length - 1);
    }
    else if (candidates[candidates.length - 1] > target) {
        const last = candidates.findIndex(x => x > target);
        candidates.splice(last);
    }
    // const boundary = Math.floor(target / candidates[0])
    // if (target % candidates[0] === 0) {
    //   result.push(new Array(target / candidates[0]).fill(candidates[0]))
    // } else {
    //   for (let i = 1; i < candidates.length; i++) {
    //     if ((boundary - 1) * candidates[0] + candidates[i] === target)
    //       result.push([...new Array(boundary - 1).fill(candidates[0]), candidates[i]])
    //     else if ((boundary - 1) * candidates[0] + candidates[i] > target) break
    //   }
    // }
    for (let i = 1; i <= Math.floor(target / candidates[0]); i++)
        arrayLoop([], i, candidates, target, result);
    return result;
};
const arrayLoop = (current, length, arr, target, result) => {
    if (length > 1) {
        let subArr = arr;
        if (current.length > 0)
            subArr = arr.slice(arr.indexOf(current[current.length - 1]));
        const start = arr.findIndex(n => n === current[current.length - 1]);
        for (let i = start; i < arr.length; i++)
            arrayLoop([...current, arr[i]], length - 1, subArr, target, result);
    }
    else {
        const fixed = current.reduce((prev, curr) => prev + curr, 0);
        const start = arr.findIndex(n => n === current[current.length - 1]);
        for (let i = start; i < arr.length; i++) {
            if (arr[i] + fixed === target)
                result.push([...current, arr[i]]);
            else if (arr[i] + fixed > target)
                break;
        }
    }
};
// console.log(combinationSum([2, 3, 5], 8))
// console.log(combinationSum([2, 3, 8, 4], 6))
// console.log(combinationSum([1, 2], 1))
// console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15))

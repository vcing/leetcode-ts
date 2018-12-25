/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (38.85%)
 * Total Accepted:    187.5K
 * Total Submissions: 480.3K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 *
 * Each number in candidates may only be used once in the combination.
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
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 *
 *
 * Example 2:
 *
 *
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 *
 *
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    if (candidates.length === 0)
        return [];
    candidates = candidates.sort((a, b) => a - b);
    let maxLength = 0;
    let _sum = 0;
    for (let i = 0; i < candidates.length; i++) {
        _sum += candidates[i];
        if (_sum >= target) {
            maxLength = i + 1;
            break;
        }
    }
    console.log(candidates, maxLength);
    if (maxLength === candidates.length)
        if (candidates.reduce((prev, curr) => prev += curr, 0) === target)
            return [candidates];
    const result = new Set();
    for (let i = 2; i <= maxLength; i++) {
        const pointers = new Array(i).fill(1).map((v, i) => i);
        // console.log(pointers)
        findCombination(i, pointers, candidates, result, target);
    }
    if (candidates.indexOf(target) !== -1)
        result.add(target.toString());
    // const pointers = new Array(1).fill(1).map((v, i) => i)
    // console.log(pointers)
    // findCombination(1, pointers, candidates, result, target)
    return [...result].map(s => s.split(',').map(v => parseInt(v)));
};
const findCombination = (length, current, arr, result, target) => {
    const min = current.reduce((prev, curr) => prev + arr[curr], 0);
    let max = current.slice(0, current.length - length).reduce((prev, curr) => prev + arr[curr], 0);
    for (let i = 1; i <= length; i++)
        max += arr[arr.length - i];
    // if (min > target || max < target) return
    console.log(min, max, target, current);
    if (length > 1) {
        const index = current.length - length;
        let start;
        if (index === 0)
            start = 0;
        else if (current[index - 1] + 1 < arr.length)
            start = current[index - 1] + 1;
        const end = arr.length - current.length + start;
        // console.log(start, end)
        for (let i = start; i <= end; i++) {
            current[index] = i;
            // for(let i = 0; i < length - index)
            findCombination(length - 1, current, arr, result, target);
        }
    }
    else {
        if (current[current.length - 2] + 1 < arr.length) {
            current[current.length - 1] = current[current.length - 2] + 1;
            for (let i = current[current.length - 1]; i < arr.length; i++) {
                current[current.length - 1] = i;
                const sum = current.reduce((prev, curr) => prev + arr[curr], 0);
                console.log(current);
                if (sum === target)
                    result.add(current.map(i => arr[i]).join(','));
                else if (sum > target)
                    return;
            }
            // reset
            current[current.length - 1] = current[current.length - 2] + 1;
        }
    }
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// console.log(combinationSum2([2, 5, 2, 1, 2], 5))
// console.log(combinationSum2([1, 1], 2))
// console.log(combinationSum2([3, 2, 4, 2], 7));

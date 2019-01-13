/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (33.86%)
 * Total Accepted:    285K
 * Total Submissions: 831.5K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
interface Interval {
  start: number,
  end: number
}

// var merge = function (intervals: Interval[]) {
//   intervals = intervals.sort((a, b) => a.start - b.start)
//   return intervals.reduce((prev, curr) => {
//     const last = prev[prev.length - 1]
//     if (prev.length === 0) return [curr]
//     if (curr.start <= last.end && curr.end > last.end) last.end = curr.end
//     else if (curr.start > last.end) prev.push(curr)
//     return prev
//   }, [])
//   // console.log(intervals)
// };

var merge = function (intervals: Interval[]) {
  intervals = intervals.sort((a, b) => a.start - b.start)
  let i = 0
  while (i < intervals.length - 1) {
    const next = intervals[i + 1]
    const curr = intervals[i]
    if (curr.end >= next.start) {
      intervals.splice(i, 2, {
        start: Math.min(curr.start, next.start),
        end: Math.max(curr.end, next.end)
      })
    } else {
      i++
    }
  }
  return intervals
}

// console.log(merge([{ start: 1, end: 2 }, { start: 2, end: 5 }, { start: 4, end: 7 }, { start: 2, end: 3 }]))

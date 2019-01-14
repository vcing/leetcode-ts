/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (30.22%)
 * Total Accepted:    158K
 * Total Submissions: 519.2K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 *
 * You may assume that the intervals were initially sorted according to their
 * start times.
 *
 * Example 1:
 *
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
    let left = 0;
    while (intervals[left] && intervals[left].start < newInterval.start)
        left++;
    if (left === 0)
        intervals.unshift(newInterval);
    else if (left === intervals.length)
        intervals.push(newInterval);
    else
        intervals.splice(left, 0, newInterval);
    return merge(intervals);
};
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a.start - b.start);
    let i = 0;
    while (i < intervals.length - 1) {
        const next = intervals[i + 1];
        const curr = intervals[i];
        if (curr.end >= next.start) {
            intervals.splice(i, 2, {
                start: Math.min(curr.start, next.start),
                end: Math.max(curr.end, next.end)
            });
        }
        else {
            i++;
        }
    }
    return intervals;
};
// console.log(insert([{ start: 1, end: 5 }], { start: 2, end: 7 }))

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
// console.log(merge([{ start: 1, end: 2 }, { start: 2, end: 5 }, { start: 4, end: 7 }, { start: 2, end: 3 }]))

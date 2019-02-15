/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (29.96%)
 * Total Accepted:    128.5K
 * Total Submissions: 420.4K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 *
 * Example:
 *
 *
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 *
 *
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const result = [];
    const backTracking = (current, left) => {
        // console.log(current)
        if (current.length === 4 && left === '')
            return result.push(current.join('.'));
        const min = s.length - (3 - current.length) * 3 - current.reduce((prev, curr) => prev + curr.toString().length, 0) || 1;
        const max = left.startsWith('0') ? 1 : Math.min(s.length - (3 - current.length) * 1 - current.reduce((prev, curr) => prev + curr.toString().length, 0), 3);
        for (let i = min; i <= max; i++) {
            const str = left.substr(0, i);
            const number = parseInt(str);
            if (number < 256)
                backTracking([...current, number], left.substr(i));
        }
    };
    backTracking([], s);
    return result;
};
// console.log(restoreIpAddresses('1111'))
// console.log(restoreIpAddresses('25525511135'))
// console.log(restoreIpAddresses("010010"))

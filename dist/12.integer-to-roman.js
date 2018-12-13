/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 *
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * algorithms
 * Medium (48.64%)
 * Total Accepted:    184.6K
 * Total Submissions: 379K
 * Testcase Example:  '3'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 *
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 *
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 *
 * Given an integer, convert it to a roman numeral. Input is guaranteed to be
 * within the range from 1 to 3999.
 *
 * Example 1:
 *
 *
 * Input: 3
 * Output: "III"
 *
 * Example 2:
 *
 *
 * Input: 4
 * Output: "IV"
 *
 * Example 3:
 *
 *
 * Input: 9
 * Output: "IX"
 *
 * Example 4:
 *
 *
 * Input: 58
 * Output: "LVIII"
 * Explanation: L = 50, V = 5, III = 3.
 *
 *
 * Example 5:
 *
 *
 * Input: 1994
 * Output: "MCMXCIV"
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 *
 */
var roman;
(function (roman) {
    roman[roman["I"] = 1] = "I";
    roman[roman["V"] = 5] = "V";
    roman[roman["X"] = 10] = "X";
    roman[roman["L"] = 50] = "L";
    roman[roman["C"] = 100] = "C";
    roman[roman["D"] = 500] = "D";
    roman[roman["M"] = 1000] = "M";
})(roman || (roman = {}));
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let length = num.toString().length;
    let result = '';
    while (length > 0) {
        const pow = Math.pow(10, length);
        const left = num % pow;
        if (left < 1 * pow / 10) {
            length--;
            continue;
        }
        let singleNumber = parseInt(left.toString()[0]);
        const number = singleNumber * Math.pow(10, length - 1);
        if (singleNumber === 0) {
            // console.log(singleNumber, length, pow)
            length--;
            continue;
        }
        if (roman[number]) {
            result += roman[number];
        }
        else {
            if (singleNumber === 4) {
                result += roman[1 * pow / 10] + roman[5 * pow / 10];
            }
            else if (singleNumber === 9) {
                result += roman[1 * pow / 10] + roman[pow];
            }
            else {
                if (singleNumber > 5) {
                    result += roman[5 * pow / 10];
                    singleNumber -= 5;
                }
                for (let i = 0; i < singleNumber; i++) {
                    result += roman[1 * pow / 10];
                }
            }
        }
        length--;
    }
    ;
    return result;
};
console.log(intToRoman(1010));

/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (39.15%)
 * Total Accepted:    313.4K
 * Total Submissions: 798.9K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
// enum num {
//   "a" = 2,
//   "b" = 2,
//   "c" = 2,
//   "d" = 3,
//   "e" = 3,
//   "f" = 3,
//   "g" = 4,
//   "h" = 4,
//   "i" = 4,
//   "j" = 5,
//   "k" = 5,
//   "l" = 5,
//   "m" = 6,
//   "n" = 6,
//   "o" = 6,
//   "p" = 7,
//   "q" = 7,
//   "r" = 7,
//   "s" = 7,
//   "t" = 8,
//   "u" = 8,
//   "v" = 8,
//   "w" = 9,
//   "x" = 9,
//   "y" = 9,
//   "z" = 9
// }
const num = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
}
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits: string): string[] {
  if (digits.length === 0) return []
  let nums = digits.split('')
  const map = nums.map((n: keyof typeof num) => num[n]).reverse()
  const result = map.reduce(getCombination, [])
  return result
};

const getCombination = (letter: string | string[], chars: string[]): string[] => {
  if (letter.length === 0) return chars
  if (Array.isArray(letter)) return letter.map((l) => getCombination(l, chars)).reduce((prev, curr) => prev.concat(curr), [])
  return chars.map(c => c + letter)
}

// console.log(letterCombinations('234'))
// console.log(getCombination('d', ['a', 'b', 'c']))
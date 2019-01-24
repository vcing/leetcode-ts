/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (29.00%)
 * Total Accepted:    202.3K
 * Total Submissions: 687K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).
 * 
 * Example:
 * 
 * 
 * Input: S = "ADOBECODEBANC", T = "ABC"
 * Output: "BANC"
 * 
 * 
 * Note:
 * 
 * 
 * If there is no such window in S that covers all characters in T, return the
 * empty string "".
 * If there is such window, you are guaranteed that there will always be only
 * one unique minimum window in S.
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// var minWindow = function (s: string, t: string) {
//   if (t.length > s.length) return ''
//   let left = 0
//   let right = 1
//   let result: number[] = []

//   const isMatchAll = () => {
//     // const condidate = s.slice(left, right).split('')
//     const tArr = t.split('')
//     s.slice(left, right).split('').forEach(char => {
//       const index = tArr.indexOf(char)
//       if (index !== -1) tArr.splice(index, 1)
//     })
//     return tArr.length === 0
//   }

//   const init = () => {
//     while (!isMatchAll() && right <= s.length) right++
//     if (right > s.length) result = [0, 0]
//     else result = [left, right]
//   }

//   const hasMoreChar = (char: string) => s.slice(left, right).split(char).length > t.split(char).length

//   const findBetter = () => {
//     while (t.indexOf(s[left]) === -1 || hasMoreChar(s[left])) left++
//     while (t.indexOf(s[right - 1]) === -1 || hasMoreChar(s[right - 1])) right--
//     result = [left, right]
//     left++
//     right++
//   }

//   init()
//   if (result[0] === result[1]) return ''
//   while (right <= s.length && right - left >= t.length) {
//     // console.log(left, right, isMatchAll())
//     if (!isMatchAll()) {
//       left++
//       right++
//     } else findBetter()
//   }
//   // console.log(result)
//   return s.slice(...result)
// };

var minWindow = function (s: string, t: string) {
  if (t.length > s.length) return ''
  let left = 0
  let right = 0
  let result = ''

  const stack = t.split('')

  while (right <= s.length) {
    // console.log(left, right)
    if (stack.length === 0) {
      if (result.length === 0 || result.length > right - left) result = s.slice(left, right)
      // console.log(s[left], s.slice(left + 1, right).split(s[left]), t.split(s[left]), result)
      if (s.slice(left + 1, right).split(s[left]).length < t.split(s[left]).length) stack.push(s[left])
      left++
    } else {
      right++
      const index = stack.indexOf(s[right - 1])
      if (index !== -1) stack.splice(index, 1)
    }
  }
  return result
}

// console.log(minWindow('ADOBECODEBANC', 'ABC'))
// console.log(minWindow('aa', 'aa'))
// console.log(minWindow('a', 'b'))
/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search/description/
 *
 * algorithms
 * Medium (29.53%)
 * Total Accepted:    240.7K
 * Total Submissions: 802.4K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 * 
 * Example:
 * 
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board: string[][], word: string) {
  const backTracking = (board: string[][], y: number, x: number, index: number) => {
    // console.log(y, x, index, board[y + 1] && board[y + 1][x] === word[index])
    const temp = board[y][x]
    board[y][x] = ''
    if (index === word.length) return true
    if (board[y + 1] && board[y + 1][x] === word[index] && backTracking(board, y + 1, x, index + 1)) return true
    if (board[y - 1] && board[y - 1][x] === word[index] && backTracking(board, y - 1, x, index + 1)) return true
    if (board[y][x + 1] === word[index] && backTracking(board, y, x + 1, index + 1)) return true
    if (board[y][x - 1] === word[index] && backTracking(board, y, x - 1, index + 1)) return true
    board[y][x] = temp
    return false
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // if (board[i][j] === word[0]) console.log(i, j, board)
      if (board[i][j] === word[0] && backTracking(board, i, j, 1)) return true
    }
  }
  return false
};

// console.log(exist([
//   ['A', 'B', 'C', 'E'],
//   ['S', 'F', 'C', 'S'],
//   ['A', 'D', 'E', 'E']
// ], 'SEEE'))

// console.log(exist([
//   ["C", "A", "A"],
//   ["A", "A", "A"],
//   ["B", "C", "D"]], 'AAB'))
// console.log(exist(
//   [
//     ["A", "B", "C", "E"],
//     ["S", "F", "E", "S"],
//     ["A", "D", "E", "E"]
//   ], "ABCESEEEFS"))

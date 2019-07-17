/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 *
 * https://leetcode.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (22.89%)
 * Total Accepted:    151.5K
 * Total Submissions: 650.1K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions
 * surrounded by 'X'.
 * 
 * A region is captured by flipping all 'O's into 'X's in that surrounded
 * region.
 * 
 * Example:
 * 
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * After running your function, the board should be:
 * 
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * Explanation:
 * 
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on
 * the border of the board are not flipped to 'X'. Any 'O' that is not on the
 * border and it is not connected to an 'O' on the border will be flipped to
 * 'X'. Two cells are connected if they are adjacent cells connected
 * horizontally or vertically.
 * 
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board: string[][]) {
  // if(board.length <= 0) return []
  const result:number[][] = new Array(board.length).fill(1).map(() => new Array(board[0].length).fill(0)) 
  const findAdjunct = (y: number, x: number) => {
    if(!board[y] || !board[y][x]) return
    if(result[y][x] === 1) return
    if(board[y][x] === 'O') result[y][x] = 1
    else return
    findAdjunct(y - 1, x) 
    findAdjunct(y + 1, x) 
    findAdjunct(y, x - 1) 
    findAdjunct(y, x + 1) 
  }
  for ( let row = 0; row < board.length; row++ ) {
    let x = 0
    let c = board[row][x]
    if (c === 'O') findAdjunct(row, x)
    x = board[0].length - 1
    c = board[row][x]
    if (c === 'O') findAdjunct(row, x)
    if (row === 0 || row === board.length - 1) {
      for(let i = 1; i < board[0].length - 1; i++) {
        c = board[row][i]
        if (c === 'O') findAdjunct(row, i)
      }
    }
  }
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      board[i][j] = result[i][j] === 0 ? 'X' : 'O'
    }
  }
};

// console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))
// console.log(solve([["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]]))

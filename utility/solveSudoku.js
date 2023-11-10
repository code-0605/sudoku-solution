import isValid from "./isValid";

function solveSudoku(squares) {
  solve(squares);
  return squares;
}

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === "") {
        for (let c = 1; c <= 9; c++) {
          if (isValid(board, i, j, c)) {
            board[i][j] = c;
            if (solve(board)) return true;
            else board[i][j] = "";
          }
        }
        return false;
      }
    }
  }
  return true;
}
export default solveSudoku;

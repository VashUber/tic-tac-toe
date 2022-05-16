import { createSlice } from "@reduxjs/toolkit";

export const ticTacToeSlice = createSlice({
  name: "TicTacToe",
  initialState: {
    move: 0,
    isWin: false,
    isDraw: false,
    board: [],
    winPositions: [
      [true, true, true, null, null, null, null, null, null],
      [null, null, null, true, true, true, null, null, null],
      [null, null, null, null, null, null, true, true, true],
      [true, null, null, true, null, null, true, null, null],
      [null, true, null, null, true, null, null, true, null],
      [null, null, true, null, null, true, null, null, true],
      [true, null, null, null, true, null, null, null, true],
      [null, null, true, null, true, null, true, null, null],
    ],
  },
  reducers: {
    initGame: (state) => {
      state.move = 0;
      state.isWin = false;
      state.isDraw = false;
      const board = [];
      for (let i = 0; i < 9; i++) {
        board.push(null);
      }
      state.board = board;
    },
    makeMove: (state, action) => {
      if (!state.win) {
        state.board[action.payload] = state.move % 2 ? "circle" : "cross";
        state.move++;
      }
    },
    checkWin: (state) => {
      if (state.move < 5) return;

      state.winPositions.forEach((elem) => {
        const check = {
          circle: 0,
          cross: 0,
        };
        elem.forEach((item, i) => {
          if (state.board[i] && item) {
            check[state.board[i]]++;
          }
        });
        if (check.circle === 3 || check.cross === 3) state.isWin = true;
        else if (state.move === 9) {
          state.isDraw = true;
        }
      });
    },
  },
});

export const { checkWin, makeMove, initGame } = ticTacToeSlice.actions;
export default ticTacToeSlice.reducer;

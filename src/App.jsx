import { useCallback, useEffect, useState } from "react";
import Cell from "./components/Cell";
import Modal from "./components/Modal";

function App() {
  const [board, setBoard] = useState([]);
  const [move, setMove] = useState(0);
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);

  const winPositions = [
    [true, true, true, null, null, null, null, null, null],
    [null, null, null, true, true, true, null, null, null],
    [null, null, null, null, null, null, true, true, true],
    [true, null, null, true, null, null, true, null, null],
    [null, true, null, null, true, null, null, true, null],
    [null, null, true, null, null, true, null, null, true],
    [true, null, null, null, true, null, null, null, true],
    [null, null, true, null, true, null, true, null, null],
  ];

  const initBoard = () => {
    const board = [];
    for (let i = 0; i < 9; i++) {
      board.push(null);
    }
    setBoard(board);
    setMove(0);
    setWin(false);
    setDraw(false);
  };

  const checkWin = () => {
    if (move < 5) return;

    winPositions.forEach((elem) => {
      const check = {
        circle: 0,
        cross: 0,
      };
      elem.forEach((item, i) => {
        if (board[i] && item) {
          check[board[i]]++;
        }
      });
      if (check.circle === 3 || check.cross === 3) setWin(true);
      else if (move === 9) {
        setDraw(true);
      }
    });
  };

  const makeMove = useCallback(
    (id) => {
      if (!win) {
        setBoard((prev) => {
          prev[id] = move % 2 ? "circle" : "cross";
          return prev;
        });
        setMove((prev) => ++prev);
      }
    },
    [move, win]
  );

  useEffect(() => {
    checkWin();
  }, [move]);

  useEffect(() => {
    initBoard();
  }, []);

  return (
    <div className="flex justify-center h-screen items-center flex-col">
      {(win || draw) && (
        <Modal initBoard={initBoard} text={win ? "Win" : "Draw"} />
      )}
      <div className="w-96 grid grid-cols-3">
        {board.map((cell, i) => {
          return <Cell key={i} cell={cell} id={i} makeMove={makeMove} />;
        })}
      </div>
    </div>
  );
}

export default App;

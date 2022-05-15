import { useEffect, useState } from "react";
import Cell from "./components/Cell";

function App() {
  const [board, setBoard] = useState([]);
  const [move, setMove] = useState(0);

  const initBoard = () => {
    const board = [];
    for (let i = 0; i < 9; i++) {
      board.push(null);
    }
    setBoard(board);
  };

  const makeMove = (id) => {
    setBoard((prev) => {
      prev[id] = move % 2 ? "circle" : "cross";
      return prev;
    });
    setMove((prev) => ++prev);
  };

  useEffect(() => {
    initBoard();
  }, []);

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-96 grid grid-cols-3">
        {board.map((cell, i) => {
          return <Cell key={i} cell={cell} id={i} makeMove={makeMove} />;
        })}
      </div>
    </div>
  );
}

export default App;

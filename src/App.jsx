import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cell from "./components/Cell";
import Modal from "./components/Modal";
import { checkWin, initGame } from "./store/ticTacToeSlice";

function App() {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.ticTacToe.board);
  const isWin = useSelector((state) => state.ticTacToe.isWin);
  const isDraw = useSelector((state) => state.ticTacToe.isDraw);

  useEffect(() => {
    dispatch(initGame());
  }, []);

  useEffect(() => {
    dispatch(checkWin());
  }, [board]);

  return (
    <div className="flex justify-center h-screen items-center flex-col">
      {(isWin || isDraw) && <Modal text={isWin ? "Win" : "Draw"} />}
      <div className="w-96 grid grid-cols-3">
        {board.map((cell, i) => {
          return <Cell key={i} cell={cell} id={i} />;
        })}
      </div>
    </div>
  );
}

export default App;

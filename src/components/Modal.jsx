import { useDispatch } from "react-redux";
import { initGame } from "../store/ticTacToeSlice";

const Modal = ({ text }) => {
  const dispatch = useDispatch();
  const restartGame = () => {
    dispatch(initGame());
  };

  return (
    <div
      className="min-h-screen min-w-full bg-gray-700 bg-opacity-75 absolute text-white flex items-center justify-center"
      onClick={restartGame}
    >
      <h2 className="text-3xl">{text}</h2>
    </div>
  );
};

export default Modal;

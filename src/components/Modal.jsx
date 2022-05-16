const Modal = ({ initBoard, text }) => {
  return (
    <div
      className="min-h-screen min-w-full bg-gray-700 bg-opacity-75 absolute text-white flex items-center justify-center"
      onClick={initBoard}
    >
      <h2 className="text-3xl">{text}</h2>
    </div>
  );
};

export default Modal;

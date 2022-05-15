import cross from "../assets/cross.svg";
import circle from "../assets/circle.svg";

const Cell = ({ cell, id, makeMove }) => {
  return (
    <div
      className={[
        "w-32 h-20 flex justify-center items-center border-sky-700 cursor-pointer",
        id % 3 !== 2 ? "border-r-4" : "",
        id < 6 ? "border-b-4" : "",
      ].join(" ")}
      onClick={() => makeMove(id)}
    >
      {cell &&
        (cell === "circle" ? (
          <img src={circle} alt="" />
        ) : (
          <img src={cross} alt="" />
        ))}
    </div>
  );
};

export default Cell;

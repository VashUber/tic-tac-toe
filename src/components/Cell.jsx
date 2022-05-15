import React from "react";
import cross from "../assets/cross.svg";
import circle from "../assets/circle.svg";

const Cell = React.memo(({ cell, id, makeMove }) => {
  const move = () => {
    makeMove(id);
  };

  return (
    <div
      className={[
        "w-32 h-20 flex justify-center items-center border-sky-700 cursor-pointer",
        id % 3 !== 2 ? "border-r-4" : "",
        id < 6 ? "border-b-4" : "",
      ].join(" ")}
      onClick={move}
    >
      {cell &&
        (cell === "circle" ? (
          <img src={circle} alt="circle" />
        ) : (
          <img src={cross} alt="cross" />
        ))}
    </div>
  );
});

export default Cell;

import { useState, useEffect } from "react";
const Patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialValue = ["", "", "", "", "", "", "", "", ""];
const Xo = () => {
  const [values, setValues] = useState(initialValue);
  const [player, setPlayer] = useState("O");
  const [info, setInfo] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    if (player === "X") setPlayer("O");
    else setPlayer("X");
  }, [values]);

  useEffect(() => {
    if (info.state !== "none") {
      alert(`Win: ${info.winner}`);
      setValues(initialValue);
    }
    const isFull = values.every((item) => item !== "");
    if (isFull && info.state === "none") {
      console.log("full no winner");
      alert("No winner!!!");
      setValues(initialValue);
    }
  }, [info]);

  const handleClick = (cell) => {
    if (values[cell] !== "") return;
    const cloneArr = values.map((val, idx) => {
      if (idx === cell && val === "") {
        return player;
      }
      return val;
    });
    setValues(cloneArr);
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = values[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (values[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setInfo({ winner: player, state: "Won" });
      }
    });
  };

  return (
    <div className="container">
      {values.map((cell, cellIndex) => (
        <div
          className="cell"
          key={String("index" + cellIndex)}
          onClick={() => handleClick(cellIndex)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Xo;

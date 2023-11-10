"use client";
import styles from "../styles/main.module.scss";
import { useState } from "react";
import Board from "./Board";
import Square from "./Square";
import Solve from "./Solve";
import initSudoku from "../utility/initSudoku";
import { Toaster } from "react-hot-toast";

const Game = () => {
  const [invalid, setInvalid] = useState(false);
  const [squares, setSquares] = useState(initSudoku);
  const [userInput, setUserInput] = useState(initSudoku);
  const [solved, setSolved] = useState(false);

  return (
    <>
      <Board {...{ solved }}>
        {squares.map((row, rowIdx) =>
          row.map((el, colIdx) => (
            <Square
              key={rowIdx * 9 + colIdx}
              val={el}
              {...{
                rowIdx,
                colIdx,
                setSquares,
                squares,
                solved,
                invalid,
                setInvalid,
                userInput,
                setUserInput,
              }}
            />
          ))
        )}
      </Board>
      <Solve
        {...{ squares, setSquares, setSolved, solved, invalid, setUserInput }}
      />
      <Toaster />
    </>
  );
};

export default Game;

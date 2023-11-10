import styles from "../styles/main.module.scss";
import solveSudoku from "../utility/solveSudoku";
import initSudoku from "../utility/initSudoku";
import { useState } from "react";
import toast from "react-hot-toast";

const Solve = (props) => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const showSuccessToast = () =>
    toast.success("Solved!", { position: "top-right" });

  const handleClick = (choice) => {
    if (choice === "solve") {
      setStart(Math.floor(Date.now()));
      let solvedSquares = solveSudoku(props.squares);
      props.setSquares(solvedSquares);
      props.setSolved(true);
      showSuccessToast();
      setEnd(Math.floor(Date.now()));
    } else {
      setStart(null);
      setEnd(null);
      props.setSquares(initSudoku);
      props.setUserInput(initSudoku);
      props.setSolved(false);
    }
  };

  return (
    <>
      <div className={styles.solve}>
        {!props.solved && (
          <button
            id={styles.solvebtn}
            disabled={props.invalid}
            onClick={() => {
              handleClick("solve");
            }}
          >
            Sudo Solution
          </button>
        )}
        {props.solved && (
          <button
            id={styles.resetbtn}
            onClick={() => {
              handleClick("reset");
            }}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
};

export default Solve;

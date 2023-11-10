import styles from "../styles/main.module.scss";
import solveSudoku from "../utility/solveSudoku";
import initSudoku from "../utility/initSudoku";
import toast from "react-hot-toast";

const Solve = (props) => {
  const showSuccessToast = () =>
    toast.success("Solved!", { position: "top-right" });

  const showErrorToast = () =>
    toast.error("No Solution!", { position: "top-right" });

  const handleClick = (choice) => {
    if (choice === "solve") {
      let solvedSquares = solveSudoku(props.squares);
      let solved = true;
      props.setSquares(solvedSquares);
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (solvedSquares[i][j] === "") {
            solved = false;
          }
        }
      }
      props.setSolved(true);
      solved ? showSuccessToast() : showErrorToast();
    } else {
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
            disabled={!props.canSolve}
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

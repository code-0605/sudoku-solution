import sanitizeInput from "../utility/sanitizeInput";
import styles from "../styles/main.module.scss";
import isValid from "../utility/isValid";
import { useState } from "react";
import toast from "react-hot-toast";

const Square = (props) => {
  const [invalid, setInvalid] = useState(false);

  const showInvalidInputToast = () =>
    toast.error("Invalid input", { position: "top-right" });

  const handleInputValue = (flag, canSolve, val) => {
    let newSquares = props.squares;
    let newUserInput = props.userInput;
    props.setCanSolve(canSolve);
    setInvalid(flag);
    props.setInvalid(flag);
    newSquares[props.rowIdx][props.colIdx] = val;
    newUserInput[props.rowIdx][props.colIdx] = val;
    props.setSquares([...newSquares]);
    props.setUserInput([...newUserInput]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    let newSquares = props.squares;
    let newInvalidSquares = props.invalidSquares;
    const selectedSqure = [props.rowIdx, props.colIdx];
    if (!e.target.value?.length) {
      handleInputValue(false, "");
      return;
    }
    const val = sanitizeInput(e);
    if (
      val === -1 ||
      !isValid(newSquares, selectedSqure[0], selectedSqure[1], val)
    ) {
      newInvalidSquares.push(selectedSqure);
      showInvalidInputToast();
      handleInputValue(true, false, e.target.value);
    } else {
      newInvalidSquares = newInvalidSquares.filter(
        (arr) => !arr.every((val, index) => val === selectedSqure[index])
      );
      handleInputValue(
        false,
        newInvalidSquares.length === 0 ? true : false,
        val
      );
    }
    console.log(newInvalidSquares);
    props.setInvalidSquares(newInvalidSquares);
  };

  return (
    <>
      {!props.solved ? (
        <input
          className={
            styles["square"] + " " + styles[invalid ? "invalid" : undefined]
          }
          type="text"
          value={props.squares[props.rowIdx][props.colIdx]}
          id="square-val"
          name="square-val"
          maxLength="1"
          inputMode="numeric"
          onChange={(e) => handleChange(e)}
        ></input>
      ) : (
        <div
          className={
            styles["square"] +
            " " +
            styles[
              props.userInput[props.rowIdx][props.colIdx] ? "highlight" : null
            ]
          }
        >
          {props.val}
        </div>
      )}
    </>
  );
};

export default Square;

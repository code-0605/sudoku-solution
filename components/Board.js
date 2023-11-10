import styles from "../styles/main.module.scss";

const Board = (props) => {
  const colorScheme = props.solved ? "rgb" : undefined;
  return (
    <div className={styles["board"] + " " + styles[colorScheme]} {...props} />
  );
};

export default Board;

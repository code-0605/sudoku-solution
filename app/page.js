import Sudoku from "../components/Sudoku";
import styles from "../styles/main.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <h1>Sudoku Solver</h1>
        <Sudoku />
      </div>
    </div>
  );
}

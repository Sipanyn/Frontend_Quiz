import { useContext } from "react";
import styles from "./result-page.module.css";
import { ThemeContext } from "styled-components";
import PlayAgainBtn from "../../components/play-again-btn/play-again-btn";

const ResultPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <p className={styles.title}>
        Quiz completed <br />
        <strong>You scored...</strong>
      </p>
      <div className={styles.score_board}>
        <strong>8</strong>
        <p className={styles.total}>out of 10</p>
      </div>
      <PlayAgainBtn />
    </div>
  );
};

export default ResultPage;

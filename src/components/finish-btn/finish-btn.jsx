import { useContext } from "react";
import styles from "./finish-btn.module.css";
import { ThemeContext } from "styled-components";
import { useNavigate } from "react-router";
import { SubjectContext } from "../../context/SubjectContext";

const FinishBtn = () => {
  let navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { setQuizCompleted } = useContext(SubjectContext);
  return (
    <button
      onClick={() => {
        setQuizCompleted(true), navigate("/result");
      }}
      className={`${styles.btn} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      Finish
      <svg className={styles.finishSvg}>
        <use href={"/sprite.svg#finish_icon"} />
      </svg>
    </button>
  );
};

export default FinishBtn;

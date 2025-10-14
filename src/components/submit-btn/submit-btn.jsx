import { useContext } from "react";
import styles from "./submit-btn.module.css";
import { ThemeContext } from "styled-components";

const SubmitBtn = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`${styles.btn} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      Submit answer
    </button>
  );
};

export default SubmitBtn;

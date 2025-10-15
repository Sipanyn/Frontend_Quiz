import { useContext } from "react";
import styles from "./option.module.css";
import { ThemeContext } from "styled-components";
import { SubjectContext } from "../../context/SubjectContext";

const Option = ({ title, index }) => {
  const { theme } = useContext(ThemeContext);
  const { SetSelectedOptionHandler, selectedOption, result, correctAnswer } =
    useContext(SubjectContext);
  return (
    <div
      onClick={() => SetSelectedOptionHandler(index)}
      className={`${styles.container} ${
        theme === "dark" ? styles.dark : styles.light
      }
      ${selectedOption === index && result === null && styles.selected}
      ${selectedOption === index && result === false && styles.incorrect}
      ${correctAnswer !== null && correctAnswer === index && styles.correct}
      ${result !== null && styles.close}`}
    >
      <span className={styles.alphabet_container}>
        {(index === 0 && "A") ||
          (index === 1 && "B") ||
          (index === 2 && "C") ||
          (index === 3 && "D")}
      </span>
      <strong className={styles.content}>{title}</strong>
    </div>
  );
};

export default Option;

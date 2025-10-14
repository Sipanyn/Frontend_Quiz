import { useContext } from "react";
import styles from "./question.module.css";
import { ThemeContext } from "styled-components";
import { SubjectContext } from "../../context/SubjectContext";

const Question = () => {
  const { theme } = useContext(ThemeContext);
  const { subjects, selectedSubject, currentQuestion } =
    useContext(SubjectContext);
  console.log(subjects[selectedSubject]);
  return (
    <p
      className={`${styles.question} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      {subjects[selectedSubject]?.info[currentQuestion]?.question}
    </p>
  );
};

export default Question;

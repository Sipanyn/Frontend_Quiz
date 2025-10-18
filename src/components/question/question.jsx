import { useContext } from "react";
import styles from "./question.module.css";
import { ThemeContext } from "styled-components";
import { SubjectContext } from "../../context/SubjectContext";
import QuestionSkeleton from "../question-skeleton/question-skeleton";

const Question = () => {
  const { theme } = useContext(ThemeContext);
  const { subjects, selectedSubject, currentQuestion } =
    useContext(SubjectContext);
  console.log(subjects[selectedSubject]);
  return (
    <div
      className={`${styles.question} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      {subjects && subjects[selectedSubject]?.info[currentQuestion]?.question}
      {subjects.length === 0 &&
        Array(2)
          .fill()
          .map((item, index) => {
            return <QuestionSkeleton key={index} />;
          })}
    </div>
  );
};

export default Question;

import { useContext } from "react";
import styles from "./counter.module.css";
import { SubjectContext } from "../../context/SubjectContext";
import QuestionSkeleton from "../question-skeleton/question-skeleton";

const Counter = () => {
  const { subjects, selectedSubject, currentQuestion } =
    useContext(SubjectContext);
  return (
    <div className={styles.counter}>
      {subjects[selectedSubject]?.info[currentQuestion] &&
        `Question ${subjects[selectedSubject]?.info[currentQuestion]?.id} of ${subjects[selectedSubject]?.info.length}`}
      {subjects.length === 0 && <QuestionSkeleton />}
    </div>
  );
};

export default Counter;

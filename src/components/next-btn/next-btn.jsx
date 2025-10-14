import { useContext } from "react";
import styles from "./next-btn.module.css";
import { SubjectContext } from "../../context/SubjectContext";
import FinishBtn from "../finish-btn/finish-btn";

const NextBtn = () => {
  const {
    setCurrentQuestionHandler,
    currentQuestion,
    subjects,
    selectedSubject,
  } = useContext(SubjectContext);

  return currentQuestion + 1 === subjects[selectedSubject].info.length ? (
    <FinishBtn />
  ) : (
    <button onClick={() => setCurrentQuestionHandler()} className={styles.btn}>
      Next Question
      <svg className={styles.nextSvg}>
        <use href={"/sprite.svg#next_icon"} />
      </svg>
    </button>
  );
};

export default NextBtn;

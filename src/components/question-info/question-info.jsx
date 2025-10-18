import { useContext } from "react";
import Counter from "../counter/counter";
import Progress from "../progress/progress";
import Question from "../question/question";
import styles from "./question-info.module.css";
import { SubjectContext } from "../../context/SubjectContext";
import QuestionSkeleton from "../question-skeleton/question-skeleton";

const QuestionInfo = () => {
  const { subjects } = useContext(SubjectContext);
  return (
    <div className={styles.container}>
      <Counter />

      <Question className={styles.Question} />
      {subjects.length > 0 && <Progress />}
      {subjects.length === 0 && <QuestionSkeleton />}
    </div>
  );
};

export default QuestionInfo;

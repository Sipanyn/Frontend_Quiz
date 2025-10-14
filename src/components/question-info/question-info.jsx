import Counter from "../counter/counter";
import Progress from "../progress/progress";
import Question from "../question/question";
import styles from "./question-info.module.css";

const QuestionInfo = () => {
  return (
    <div className={styles.container}>
      <Counter />
      <Question />
      <Progress />
    </div>
  );
};

export default QuestionInfo;

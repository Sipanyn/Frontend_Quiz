import Options from "../../components/options/options";
import QuestionInfo from "../../components/question-info/question-info";
import SubmitBtn from "../../components/submit-btn/submit-btn";
import styles from "./questions-page.module.css";
import { SubjectContext } from "../../context/SubjectContext";

const QuestionsPage = () => {
  return (
    <div className={styles.container}>
      <QuestionInfo />
      <Options />
      <SubmitBtn />
    </div>
  );
};

export default QuestionsPage;

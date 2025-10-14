import { useContext, useEffect } from "react";
import Options from "../../components/options/options";
import QuestionInfo from "../../components/question-info/question-info";
import SubmitBtn from "../../components/submit-btn/submit-btn";
import styles from "./questions-page.module.css";
import {
  setCurrentQuestionLocal,
  setPointLocal,
  setSelectedSubjectLocal,
} from "../../utils/localStorage";
import { SubjectContext } from "../../context/SubjectContext";

const QuestionsPage = () => {
  const { selectedSubject, point, currentQuestion } =
    useContext(SubjectContext);
  useEffect(() => {
    setSelectedSubjectLocal("selectedSubject", selectedSubject);
    setPointLocal("point", point);
    setCurrentQuestionLocal("currentQuestion", currentQuestion);
  }, [selectedSubject, point, currentQuestion]);

  return (
    <div className={styles.container}>
      <QuestionInfo />
      <Options />
      <SubmitBtn />
    </div>
  );
};

export default QuestionsPage;

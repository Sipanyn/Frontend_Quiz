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
import { ThemeContext } from "styled-components";

const QuestionsPage = () => {
  const { theme } = useContext(ThemeContext);
  const { subjects, selectedSubject } = useContext(SubjectContext);

  // useEffect(() => {
  //   setSelectedSubjectLocal("selectedSubject", selectedSubject);
  //   setPointLocal("point", point);
  //   setCurrentQuestionLocal("currentQuestion", currentQuestion);
  // }, [selectedSubject, point, currentQuestion]);

  const subject = subjects?.[selectedSubject] || {};
  const { icon, title, color, bgColor } = subject;

  // console.log(subject?.icon);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.subjectHeader} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      >
        <div
          className={styles.svg_container}
          style={{ color: color, backgroundColor: bgColor }}
          dangerouslySetInnerHTML={{ __html: icon }}
        />
        <strong className={styles.content}>{title}</strong>
      </div>

      <QuestionInfo />
      <Options />
      <SubmitBtn />
    </div>
  );
};

export default QuestionsPage;

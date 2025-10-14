import { useContext } from "react";
import styles from "./progress.module.css";
import { ThemeContext } from "styled-components";
import { SubjectContext } from "../../context/SubjectContext";

const Progress = () => {
  const { theme } = useContext(ThemeContext);
  const { subjects, selectedSubject, currentQuestion } =
    useContext(SubjectContext);
  return (
    <div>
      <progress
        className={`${styles.progress} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
        value={subjects[selectedSubject]?.info[currentQuestion]?.id}
        max={subjects[selectedSubject]?.info.length}
      ></progress>
    </div>
  );
};

export default Progress;

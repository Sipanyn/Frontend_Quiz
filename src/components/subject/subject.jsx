import { useContext } from "react";
import styles from "./subject.module.css";
import { ThemeContext } from "styled-components";
import { SubjectContext } from "../../context/SubjectContext";

const Subject = ({ color, bgColor, icon, title, index }) => {
  const { theme } = useContext(ThemeContext);
  const { selectedSubject } = useContext(SubjectContext);
  return (
    <div
      className={`${styles.container} ${
        selectedSubject === index && styles.selected
      }`}
    >
      {/* before */}
      <div
        className={`${styles.subject} ${
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
    </div>
  );
};

export default Subject;

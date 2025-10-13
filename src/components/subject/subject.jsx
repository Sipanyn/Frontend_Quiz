import { useContext } from "react";
import styles from "./subject.module.css";
import { ThemeContext } from "styled-components";

const Subject = ({ color, bgColor, icon, title }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      {/* before */}
      <div
        className={`${styles.subject} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      >
        <svg
          className={styles.svg_container}
          style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
        >
          <use href={`/sprite.svg#${icon}`} />
        </svg>
        <strong className={styles.content}>{title}</strong>
      </div>
    </div>
  );
};

export default Subject;

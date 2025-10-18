import { useContext } from "react";
import styles from "./question-skeleton.module.css";
import { ThemeContext } from "styled-components";
import Shimmer from "../shimmer/shimmer";
const QuestionSkeleton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.skeleton} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <Shimmer />
    </div>
  );
};

export default QuestionSkeleton;

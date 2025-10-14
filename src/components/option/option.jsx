import { useContext } from "react";
import styles from "./option.module.css";
import { ThemeContext } from "styled-components";

const Option = ({ title, index }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <span className={styles.alphabet_container}>
        {(index === 0 && "A") ||
          (index === 1 && "B") ||
          (index === 2 && "C") ||
          (index === 3 && "D")}
      </span>
      <strong className={styles.content}>{title}</strong>
    </div>
  );
};

export default Option;

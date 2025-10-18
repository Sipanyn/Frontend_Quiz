import { useContext } from "react";
import styles from "./shimmer.module.css";
import { ThemeContext } from "styled-components";

const Shimmer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.shimmer_wrapper} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.shimmer}></div>
    </div>
  );
};

export default Shimmer;

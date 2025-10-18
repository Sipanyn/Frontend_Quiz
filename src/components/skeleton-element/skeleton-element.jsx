import { useContext } from "react";
import styles from "./skeleton-element.module.css";
import { ThemeContext } from "styled-components";
import Shimmer from "../shimmer/shimmer";

const SkeletonElement = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.skeleton} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.svg_container}></div>
      <div className={styles.title}></div>
      <Shimmer />
    </div>
  );
};

export default SkeletonElement;

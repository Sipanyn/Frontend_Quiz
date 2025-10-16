import { useContext } from "react";
import styles from "./not-found.module.css";
import { ThemeContext } from "styled-components";
import { Link, NavLink } from "react-router";

const NotFound = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.content}>
        <p>Page Not Found</p>
        <svg className={styles.svg_sad}>
          <use href={"/sprite.svg#sad_icon"} />
        </svg>
      </div>
      <svg className={styles.svg_warning}>
        <use href={"/sprite.svg#not-found_icon"} />
      </svg>
      <div className={styles.back_home}>
        <Link to="/">Back to home </Link>
        <svg className={styles.svg_back}>
          <use href={"/sprite.svg#back_icon"} />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;

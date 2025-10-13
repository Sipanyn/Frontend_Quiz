import styles from "./mode-changer.module.css";
import Switch from "../switch/Switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const ModeChanger = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <svg className={styles.moon}>
        <use href={"/sprite.svg#moon_icon"} />
      </svg>
      <Switch />
      <svg className={styles.sun}>
        <use href={"/sprite.svg#sun_icon"} />
      </svg>
    </div>
  );
};

export default ModeChanger;

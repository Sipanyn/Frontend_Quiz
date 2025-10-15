import { useContext } from "react";
import styles from "./start-btn.module.css";
import { ThemeContext } from "styled-components";
import { SubjectContext } from "../../context/SubjectContext";
import { useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

const StartBtn = () => {
  const { theme } = useContext(ThemeContext);
  const { selectedSubject } = useContext(SubjectContext);
  let navigate = useNavigate();
  return (
    <a
      onPointerEnter={() => alert("hi")}
      onClick={() =>
        selectedSubject === null
          ? toast.error("Select one subject!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: theme === "dark" ? "dark" : "light",
              transition: Bounce,
            })
          : navigate("/questions")
      }
      href="#"
      className={`${styles.btn} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <span className={styles.span}></span>
      Start Quiz
    </a>
  );
};

export default StartBtn;

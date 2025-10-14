import { useContext } from "react";
import styles from "./submit-btn.module.css";
import { ThemeContext } from "styled-components";
import { SubjectContext } from "../../context/SubjectContext";
import NextBtn from "../next-btn/next-btn";
import { Bounce, toast } from "react-toastify";

const SubmitBtn = () => {
  const { theme } = useContext(ThemeContext);
  const { validationFun, result, selectedOption } = useContext(SubjectContext);

  return result === null ? (
    <button
      onClick={() =>
        selectedOption === null
          ? toast.error("Select your answer!", {
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
          : validationFun()
      }
      className={`${styles.btn} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      Submit answer
    </button>
  ) : (
    <NextBtn />
  );
};

export default SubmitBtn;

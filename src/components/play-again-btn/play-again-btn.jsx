import { useContext } from "react";
import styles from "./play-again-btn.module.css";
import { SubjectContext } from "../../context/SubjectContext";
import { useNavigate } from "react-router";

const PlayAgainBtn = () => {
  const { resetGame } = useContext(SubjectContext);
  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        resetGame();
        navigate("/");
      }}
      className={styles.btn}
    >
      Play again
    </button>
  );
};

export default PlayAgainBtn;

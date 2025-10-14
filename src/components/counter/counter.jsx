import { useContext } from "react";
import styles from "./counter.module.css";
import { SubjectContext } from "../../context/SubjectContext";

const Counter = () => {
  const { subjects, selectedSubject } = useContext(SubjectContext);
  return (
    <p className={styles.counter}>
      Question {subjects[selectedSubject].info[0].id} of{" "}
      {subjects[selectedSubject].info.length}
    </p>
  );
};

export default Counter;

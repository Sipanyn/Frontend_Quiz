import styles from "./options.module.css";
import Option from "../option/option";
import { useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";
import SkeletonElement from "../skeleton-element/skeleton-element";
const Options = () => {
  const { subjects, selectedSubject, currentQuestion } =
    useContext(SubjectContext);
  return (
    <ul className={styles.ul}>
      {subjects &&
        subjects[selectedSubject]?.info[currentQuestion]?.options.map(
          (option, index) => {
            return (
              <li className={styles.li} key={option}>
                <Option title={option} index={index} />
              </li>
            );
          }
        )}
      {subjects.length === 0 && <SkeletonElement />}
    </ul>
  );
};

export default Options;

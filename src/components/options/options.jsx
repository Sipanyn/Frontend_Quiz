import styles from "./options.module.css";
import Option from "../option/option";
import { useContext } from "react";
import { SubjectContext } from "../../context/SubjectContext";
const Options = () => {
  const { subjects, selectedSubject } = useContext(SubjectContext);
  return (
    <ul className={styles.ul}>
      {subjects[selectedSubject].info[0].options.map((option, index) => {
        return (
          <li className={styles.li} key={option}>
            <Option title={option} index={index} />
          </li>
        );
      })}
    </ul>
  );
};

export default Options;

import { useContext } from "react";
import Subject from "../subject/subject";
import styles from "./subjects.module.css";
import { SubjectContext } from "../../context/SubjectContext";

const Subjects = () => {
  const { subjects, selectSubjectHandler } = useContext(SubjectContext);

  return (
    <ul className={styles.container}>
      {subjects.map((subject, index) => {
        return (
          <li
            onClick={() => selectSubjectHandler(index)}
            key={subject.id}
            className={styles.listItem}
          >
            <Subject
              title={subject.title}
              icon={subject.icon}
              color={subject.color}
              bgColor={subject.bgColor}
              index={index}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Subjects;

import { useContext } from "react";
import Subject from "../subject/subject";
import styles from "./subjects.module.css";
import { SubjectContext } from "../../context/SubjectContext";
import SkeletonElement from "../skeleton-element/skeleton-element";

const Subjects = () => {
  const { subjects, selectSubjectHandler } = useContext(SubjectContext);

  return (
    <ul className={styles.container}>
      {subjects &&
        subjects.map((subject, index) => {
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
      {subjects.length === 0 &&
        Array(4)
          .fill()
          .map((item, index) => {
            return <SkeletonElement key={index} />;
          })}
    </ul>
  );
};

export default Subjects;

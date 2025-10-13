import Subject from "../subject/subject";
import styles from "./subjects.module.css";

const Subjects = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.listItem}>
        <Subject
          title={"HTML"}
          icon={"html_icon"}
          color={"orange"}
          bgColor={"rgba(239, 214, 167, 1)"}
        />
      </li>
      <li className={styles.listItem}>
        {" "}
        <Subject
          title={"CSS"}
          icon={"css_icon"}
          color={"green"}
          bgColor={"rgb(218, 249, 227)"}
        />
      </li>
      <li className={styles.listItem}>
        {" "}
        <Subject
          title={"Javascript"}
          icon={"js_icon"}
          color={"blue"}
          bgColor={"rgba(190, 194, 240, 1)"}
        />
      </li>
      <li className={styles.listItem}>
        {" "}
        <Subject
          title={"Accessibility"}
          icon={"accessibility_icon"}
          color={"purple"}
          bgColor={"rgba(249, 216, 246, 1)"}
        />
      </li>
    </ul>
  );
};

export default Subjects;

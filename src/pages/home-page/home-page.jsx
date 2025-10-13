import styles from "./home-page.module.css";
import Subjects from "../../components/subjects/subjects.jsx";
import Welcome from "../../components/welcome/welcome.jsx";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Welcome />
      <Subjects />
    </div>
  );
};

export default HomePage;

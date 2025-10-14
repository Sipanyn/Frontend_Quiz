import styles from "./home-page.module.css";
import Subjects from "../../components/subjects/subjects.jsx";
import Welcome from "../../components/welcome/welcome.jsx";
import StartBtn from "../../components/start-btn/start-btn.jsx";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Welcome />
      <Subjects />
      <StartBtn />
    </div>
  );
};

export default HomePage;

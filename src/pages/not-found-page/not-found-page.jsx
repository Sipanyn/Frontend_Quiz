import NotFound from "../../components/not-found/not-found";
import styles from "./not-found-page.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <NotFound />
    </div>
  );
};

export default NotFoundPage;

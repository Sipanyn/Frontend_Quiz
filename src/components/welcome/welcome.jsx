import styles from "./welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Welcome to the <strong>Frontend Quiz!</strong>
      </p>
      <p className={styles.content}>Pich a subject to get started</p>
    </div>
  );
};

export default Welcome;

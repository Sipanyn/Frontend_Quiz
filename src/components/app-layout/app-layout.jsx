import { Outlet } from "react-router";
import ModeChanger from "../mode-changer/mode-changer";
import styles from "./app-layout.module.css";
const AppLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ModeChanger />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

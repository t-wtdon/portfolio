import { Sidebar } from "@/components/Sidebar/Sidebar";
import { MainContent } from "@/components/MainContent/MainContent";
import styles from "./page.module.scss";
import { MouseLight } from "@/components/MouseLight/MouseLight";

const Home = () => {
  return (
    <div className={styles.layout}>
      <MouseLight />

      <Sidebar className={styles.sidebar} />
      <MainContent className={styles.content} />
    </div>
  );
};

export default Home;

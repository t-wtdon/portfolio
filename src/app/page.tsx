import { Sidebar } from "@/components/Sidebar/Sidebar";
import { MainContent } from "@/components/MainContent/MainContent";
import styles from "./page.module.scss";
import { MouseLight } from "@/components/MouseLight/MouseLight";

export const metadata = {
  title: "ダイナソくん | フロントエンドエンジニア",
  description:
    "シンプルでわかりやすいWebサイト制作を大切にしています。Next.js/Reactを中心に、見やすく使いやすいWebアプリケーションを開発しています。",
};

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

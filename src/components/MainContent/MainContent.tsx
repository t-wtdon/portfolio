import styles from "./MainContent.module.scss";
import Image from "next/image";

type Props = {
  className?: string;
};

const skills = [
  {
    title: "フロントエンド",
    text: "- Next.js/React/TypeScript/vue/html",
  },
  {
    title: "スタイリング",
    text: "- SCSS/CSS Modules/Tailwind CSS/flocss・bem",
  },
  {
    title: "AI活用",
    text: "- ChatGPT/cursor/claude",
  },
  {
    title: "その他",
    text: "- Git/GitHub/Figma/Adobe",
  },
];

const jobs = [
  {
    imgObj: {
      path: "/images/top/njoy.jpg",
      width: 1000,
      height: 1000,
      alt: "",
    },
    path: "https://n-joy.jp/",
    title: "株式会社njoyのHP制作",
    text: "株式会社njoyのHP制作を致しました。",
  },
  {
    imgObj: {
      path: "/images/top/genki.jpg",
      width: 1000,
      height: 1000,
      alt: "",
    },
    path: "https://n-joy.jp/genki-station",
    title:
      "株式会社njoyの事業「げんき訪問看護ステーション」のサービスサイトを制作",
    text: "株式会社njoyの訪問介護事業の「げんき訪問看護ステーション」のサービスサイトを制作しました。",
  },
  {
    imgObj: {
      path: "/images/top/kotodama.jpg",
      width: 1000,
      height: 1000,
      alt: "",
    },
    path: "https://kotodama-psi.vercel.app/quiz/kotodama",
    title: "個人プロジェクト「ことだま生成器」を制作",
    text: "個人プロジェクトとして「ことだま生成器」を制作しました。名前とキーワードを入れると名言を作成してくれます。",
  },
];

export const MainContent = ({ className }: Props) => {
  return (
    <main className={className}>
      <div className={styles.main}>
        <section className={styles.section} id="about">
          <h2 className={styles.title}>私について</h2>
          <p>
            シンプルでわかりやすいデザインを大切にしています。
            <br />
            <br />
            2015年にアルバイトとしてポート株式会社に入社後、HTML/CSS/JavaScriptを用いたWeb制作に携わり、
            LPやFacebookタブページなど約1年間で300件近い受託開発を経験しました。
            <br />
            <br />
            その後、実績が評価され正社員となり、Railsプロジェクトに参画。
            フロントエンド担当として約5年間、開発に従事してきました。
            <br />
            その後は飲食業界向けサービスの開発や、大手ゲーム会社のプロジェクトにてReactやElectronを用いた開発に携わるなど、
            さまざまな現場でフロントエンドを中心に経験を積んできました。
            <br />
            <br />
            副業ではVue.jsを用いた開発案件にも携わり、幅広いフロントエンド技術に対応しています。
            <br />
            <br />
            現在はNext.js/Reactを中心に、モダンなWebサイトやWebアプリケーションの開発に取り組んでいます。
            <br />
            これまでの経験を通して、見やすさや使いやすさを意識し、誰でも迷わず使える設計を心がけています。
            <br />
            細かいUIや導線にもこだわり、ユーザーにとってストレスのないWeb体験を提供できるよう意識しています。
          </p>
        </section>

        <section className={styles.section} id="experience">
          <h2 className={styles.title}>スキルセット</h2>

          <div className={styles.block}>
            <p className={styles.blockTitle}>フロントエンド</p>
            <p className={styles.blockText}>
              - Next.js/React/TypeScript/vue/html
            </p>
          </div>

          {skills.map((skill, i) => {
            return (
              <div key={i} className={styles.block}>
                <p className={styles.blockTitle}>{skill.title}</p>
                <p className={styles.blockText}>{skill.text}</p>
              </div>
            );
          })}
        </section>

        <section className={styles.section} id="projects">
          <h2 className={styles.title}>実績</h2>

          <ul className={styles.list}>
            {jobs.map((job, i) => {
              return (
                <li key={i} className={styles.listItem}>
                  <a
                    className={styles.link}
                    href={job.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={styles.img}
                      src={job.imgObj.path}
                      alt={job.imgObj.alt}
                      width={job.imgObj.width}
                      height={job.imgObj.height}
                    />
                    <div className={styles.jobData}>
                      <p className={styles.jobTitle}>{job.title}</p>
                      <p className={styles.jobText}>{job.text}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={styles.section} id="contact">
          <h2 className={styles.title}>お問い合わせ</h2>

          <p className={styles.text}>
            お問い合わせは
            <a
              className={styles.textLink}
              href="https://docs.google.com/forms/d/e/1FAIpQLSe7bhomD93KF873QXfUza1x5w2RbF1kCt0v01tcoByrZUAetg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

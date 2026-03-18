"use client";

import { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className={className}>
      <div className={styles.innerSidebar}>
        <div className={styles.inner}>
          <h2 className={styles.title}>ダイナソくん</h2>
          <span className={styles.subTitle}>- Frontend Developer</span>

          <div className={styles.description}>
            シンプルでわかりやすい Webサイトを制作しています。
            <br />
            使いやすさと見やすさを大切に、
            誰でも直感的に使えるデザインを心がけています。
          </div>

          <ul className={styles.nav}>
            <li
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`${styles.navItem} ${
                active === "about" ? styles.navItemActive : ""
              }`}
            >
              自己紹介
            </li>

            <li
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`${styles.navItem} ${
                active === "experience" ? styles.navItemActive : ""
              }`}
            >
              スキルセット
            </li>

            <li
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`${styles.navItem} ${
                active === "projects" ? styles.navItemActive : ""
              }`}
            >
              実績
            </li>

            <li
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`${styles.navItem} ${
                active === "contact" ? styles.navItemActive : ""
              }`}
            >
              お問い合わせ
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

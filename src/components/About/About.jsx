import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
              As a budding software developer, I am eager to commence my journey in the dynamic realm of IT, with a specific focus on full-stack web development. My foundation in JavaScript and Java and a passion for coding and web development equip me to contribute meaningfully to the projects. I am committed to staying abreast of the latest web development trends, possessing an analytical mindset and a dedication to continuous learning which make me a motivated candidate for this role.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

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
            <div className={styles.aboutItemText}>
              <p>
                Experienced Software Engineer with a strong background in
                developing scalable frontend and backend systems. Proficient in
                React, JavaScript, Java, and Spring Boot, with hands-on
                experience in building end-to-end applications and leading
                platform architecture for both internal tools and
                customer-facing products. Skilled in optimizing algorithms,
                improving system performance, and implementing efficient API
                designs. Proven track record of driving workflow improvements,
                reducing response times, and delivering solutions that enhance
                operational efficiency and stakeholder satisfaction.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

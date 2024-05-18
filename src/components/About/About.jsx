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
                Experienced in developing both frontend and backend systems
                leading platform architecture and development for internal and
                external use. Skilled in optimizing algorithms and enhancing
                system performance. Proven track record of improving operational
                efficiency and stakeholder engagement through innovative
                solutions. Proficient in a wide range of technologies, driving
                significant improvements in workflow processes and response
                times.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

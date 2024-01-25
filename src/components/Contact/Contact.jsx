import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">saurabhguptacs27@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/saurabh-gupta-39b7882a0/">in/saurabh-gupta-39b7882a0/</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/phoneIcon.png")}
            alt="Phone icon"
          />
          <a>+919450174026</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/saurabhguptacse27/">github.com/saurabhguptacse27</a>
        </li>
      </ul>
    </footer>
  );
};

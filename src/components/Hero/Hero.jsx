import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <h5>Hi, I'm</h5> Saurabh Gupta
        </h1>
        <p className={styles.description}>
          Software developer with fundamentals in front-end and back-end web
          development.
        </p>
        <a
          href={`${getImageUrl("cv/SaurabhGuptaCSResume.pdf")}`}
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

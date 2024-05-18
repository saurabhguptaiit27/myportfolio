import React from "react";

import styles from "./Experience.module.css";
import experience from "../../data/experience.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.position}>EXPERIENCE</h2>
      <div className={styles.content}>
        <ul className={styles.exp}>
          {experience.map((expItem, id) => {
            return (
              <li key={id} className={styles.expItem}>
                <img
                  className={styles.expImg}
                  src={getImageUrl(expItem.imageSrc)}
                  alt={`${expItem.organisation} Logo`}
                />
                <div className={styles.expItemDetails}>
                  <h2>{`${expItem.position}`}</h2>
                  <h3>{`${expItem.Organisation}`}</h3>
                  <p>{`${expItem.startDate} - ${expItem.endDate}`}</p>
                  <p>{`${expItem.jobSummary}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

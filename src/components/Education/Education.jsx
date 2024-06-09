import React from "react";

import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";


export const Education = () => {
    return (
      <section className={styles.container} id="education">
        <h2 className={styles.degree}>Education</h2>
        <div className={styles.content}>
          <ul className={styles.edu}>
            {education.map((eduItem, id) => {
              return (
                <li key={id} className={styles.eduItem}>
                  <img
                    className={styles.eduImg}
                    src={getImageUrl(eduItem.imageSrc)}
                    alt={`${eduItem.organisation} Logo`}
                  />
                  <div className={styles.eduItemDetails}>
                    <h3>{`${eduItem.degree} - ${eduItem.Organisation}`}</h3>
                    <p>
                      {`${eduItem.stream}`}
                      <span> - </span>
                      <a
                        href={`${getImageUrl(eduItem.resultproof)}`}
                      >{`${eduItem.results}`}</a>
                      🔗
                    </p>
                    <p>{`${eduItem.startDate} - ${eduItem.endDate}`}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  };
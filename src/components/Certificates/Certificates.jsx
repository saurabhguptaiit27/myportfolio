import React from "react";

import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";


export const Certificates = () => {
    return (
      <section className={styles.container} id="certificates">
        <h2 className={styles.title}>Certificates</h2>
        <div className={styles.content}>
          <ul className={styles.certi}>
            {certificates.map((certiItem, id) => {
              return (
                <li key={id} className={styles.certiItem}>
                  <img className={styles.certiImg}
                    src={getImageUrl(certiItem.imageSrc)}
                    alt={`${certiItem.organisation} Logo`}
                  />
                  <div className={styles.certiItemDetails}>
                    <h3>{`${certiItem.title}`}</h3>
                    <p>{`${certiItem.Organisation}`}</p>
                    <a href={`${certiItem.link}`}>{`${certiItem.link}`}</a>
                    <p>{`${certiItem.Date}`}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  };
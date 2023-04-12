import React from 'react';
import styles from './Main.module.scss';
import { places } from './mock';

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      {places.map((place) => (
        <div className={styles.place} key={place.img}>
          <div className={styles.title}>{place.title}</div>
          <span className={styles.descr}>{place.descr}</span>
          <img className={styles.img} src={place.img} alt={place.title} />
        </div>
      ))}
    </div>
  );
};

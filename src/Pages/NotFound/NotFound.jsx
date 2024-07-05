import React from 'react';
import styles from './notFound.module.css';

const NotFound = ({ handlerNavigate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        הקורס לא נמצא
        <div className={styles.animation}>😢</div>
      </div>
      <div className={styles.back} onClick={handlerNavigate}>
        חזור לדף הקורסים
      </div>
    </div>
  );
};

export default NotFound;

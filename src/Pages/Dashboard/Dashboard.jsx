import React from 'react';
import user from './userData';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const { name, email, registeredCourses, stats, notifications } = user;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>משתמש רשום: <input type='text'  placeholder={name}></input>
        {/* אמייל:  <input type='text'  placeholder={email}></input> */}
        <div className={styles.output}>
        <button>יציאה</button>
        </div>
        </h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <h3>סטטיסטיקות</h3>
          <div className={styles.stats}>
            {stats.map(stat => (
              <div key={stat.id} className={styles.statItem}>
                <h4>{stat.value} :</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.gridItem}>
          <h3>הודעות</h3>
          <div className={styles.notifications}>
            {notifications.map(notification => (
              <div key={notification.id} className={styles.notification}>
                <p>{notification.message}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.gridItem}>
          <h3>קורסים שנרשמתה אליהם</h3>
          <div className={styles.courses}>
            {registeredCourses.map(course => (
              <div key={course.id} className={styles.courseCard}>
                <img src={course.imageUrl} alt={course.name} />
                <div className={styles.courseCardBody}>
                  <h5>{course.name}</h5>
                  <p>{course.title}</p>
                  <button className={styles.btn}>פתח קורס</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

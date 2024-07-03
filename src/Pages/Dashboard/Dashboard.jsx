import React from 'react';
import user from './userData';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const { name, email, registeredCourses, stats, notifications } = user;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>אזור אישי של {name}</h2>
        <p>אמייל: {email}</p>
      </div>

      <div className={styles.stats}>
        {stats.map(stat => (
          <div key={stat.id} className={styles.statItem}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.notifications}>
        <h3>הודאות</h3>
        {notifications.map(notification => (
          <div key={notification.id} className={styles.notification}>
            <p>{notification.message}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>קורסים שנרשמתה אליהם</h3>
        <div className={styles.row}>
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
  );
};

export default Dashboard;

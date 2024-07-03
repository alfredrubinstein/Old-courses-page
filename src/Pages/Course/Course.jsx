import React from 'react';
import { useParams } from 'react-router-dom';
import courses from './coursesData';
import styles from './course.module.css';

const Course = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>הקורס לא נמצא</div>;
  }

  return (
    <div className={styles.courseContainer}>
      <img src={course.img} alt={course.title} />
      <h1>{course.title}</h1>
      <div className={styles.details}>
        <p>{course.description}</p>
        <button className={styles.btn}>הרשם</button>
      </div>
    </div>
  );
};

export default Course;

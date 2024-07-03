import React from 'react';
import { useNavigate } from 'react-router-dom';
import courses from '../Course/coursesData'; 
import styles from './Courses.module.css';

const Courses = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className={styles.DetailsContainer}>
      <div className={styles.details}>
        {courses.map((course, index) => ( 
          <div key={index} className={styles.box} onClick={() => handleClick(course.id)}> 
          {/* Changed data.details to courses, and added onClick */}
            <img src={course.img} alt={course.title} />
            <div className={styles.box_content}>
              <h6>{course.title}</h6>
              <p>
                {course.description.length > 100 
                  ? `${course.description.substring(0, 100)}...` 
                  : course.description}
              </p> 
              {/* Increased character limit to 100 for better readability */}
            </div>
            <div className={styles.courseBtn}>
              <div className={styles.btn}>
                <>קרא עוד</>
                 {/* Removed extra button element and adjusted styling */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

// Courses.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import courses from '../Course/coursesData';

const Courses = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate.push(`/course/${id}`);
  };

  return (
    <div>
      {courses.map(course => (
        <button key={course.id} onClick={() => handleClick(course.id)}>
          <img src={course.imageUrl} alt={course.name} />
          <h2>{course.name}</h2>
          <p>{course.title}</p>
        </button>
      ))}
    </div>
  );
};

export default Courses;

// Course.js
import React from 'react';
import { useParams } from 'react-router-dom';
import courses from './coursesData';

const Course = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <div>
      <img src={course.imageUrl} alt={course.name} />
      <h1>{course.name}</h1>
      <h2>{course.title}</h2>
    </div>
  );
};

export default Course;

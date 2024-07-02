import React from 'react';
import { useNavigate } from 'react-router-dom';
import courses from '../Course/coursesData';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className="container">
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card" onClick={() => handleClick(course.id)}>
              <img src={course.imageUrl} className="card-img-top" alt={course.name} />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.title}</p>
                <button className="btn btn-primary">Ver Curso</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

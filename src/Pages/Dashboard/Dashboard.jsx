import React from 'react';
import user from './userData';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const { name, email, registeredCourses } = user;

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-md-12">
          <h2>Dashboard de {name}</h2>
          <p>Email: {email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Cursos Registrados</h3>
          <div className="row">
            {registeredCourses.map(course => (
              <div key={course.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={course.imageUrl} className="card-img-top" alt={course.name} />
                  <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">{course.title}</p>
                    <button className="btn btn-primary">Ir al curso</button>
                  </div>
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

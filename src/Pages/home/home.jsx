import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import "./home.css";

const Home = () => {
  const handlerButton = () => {
    window.location.href = "#about";
  };

  return (
    <>
      <div className="header">
        <div>
          <div className="img">
            <img src={data.header.img} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="HeaderContent">
          <h6>
            {" "}
            {data.header.title}
            <span> חייך </span> 
          </h6>
          <button className="btn btn-secondary" onClick={handlerButton}>{data.header.buttonText}</button>
        </div>
      </div>

      <div id="about"></div>

      {/* About Section */}
      <div className="about container">
        <div className="row">
          <div className="col-sm-5">
            <img src={data.about.img} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-6">
            <h6>{data.about.title}</h6>
            <h5>{data.about.subtitle}</h5>
            <p>{data.about.description}</p>
          </div>
        </div>
      </div>
  
      {/* Second Header */}
      <div className="second_header">
        <div>
          <img src={data.secondHeader.img} alt="" />
        </div>
        <div className="Overlay"></div>
      </div>

      {/* Details */}
      <div className="details container">
        <div className="row">
          {data.details.slice(0, 3).map((item, index) => (
            <div className="col-sm-4" key={index}>
              <div className="box">
                <img src={item.img} className="img-fluid" alt={item.title} />
                <div className="box_content">
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                  <Link to={`/course/${item.id}`} className="btn">{item.buttonText}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="details container">
        <div className="row">
          {data.details.slice(3, 6).map((item, index) => (
            <div className="col-sm-4" key={index}>
              <div className="box">
                <img src={item.img} className="img-fluid" alt={item.title} />
                <div className="box_content">
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                  <Link to={`/course/${item.id}`} className="btn">{item.buttonText}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import styles from './Home.module.css';

const Home = () => {
  const handlerButton = () => {
    window.location.href = "#About";
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.img}>
            <img src={data.header.img} alt="" />
          </div>
          <div className={styles.Overlay}></div>
        </div>
        <div className={styles.HeaderContent}>
          <h6>
            {" "}
            {data.header.title}
            <span> חייך </span>
          </h6>
          <button className={styles.btn} onClick={handlerButton}>
            {data.header.buttonText}
          </button>
        </div>
      </div>

      <div id="About"></div>
      {/* About Section */}
      <div className={styles.AboutContainer}>
        <div className={styles.row}>
          <img src={data.About.img} className={styles.AboutImage} alt="" />
        </div>
        <h6>{data.About.title}</h6>
        <h5>{data.About.subtitle}</h5>
        <p>{data.About.description}</p>
      </div>

      {/* Second Header -foto de separacion*/}
      <div className={styles.second_header}>
        <div>
          <img src={data.secondHeader.img} alt="" />
        </div>
        <div className={styles.Overlay}></div>
      </div>

      {/* Details -cursos*/}
      <div className={styles.DetailsContainer}>
          <div className={styles.details}>
            {data.details.map((item, index) => (
              <div key={index} className={styles.box}>
                <img src={item.img} alt={item.title} />
                <div className={styles.box_content}>
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                  <Link to={`/course/${item.id}`} className={styles.btn}>
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Home;

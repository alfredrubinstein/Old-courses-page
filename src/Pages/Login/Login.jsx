import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactHeader from '../../Images/7.jpg';
import styles from './login.module.css';

const Login = ({ onRegister }) => {
  const navigate = useNavigate();
  const handleRegister = () => navigate("/");

  return (
    <>
      <div className={styles.contact}>
        <img src={ContactHeader} alt="Contact Header" />
      </div>

      {/* Login Form */}
      <div className={`${styles.login_form} container`}>
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <form action="">
              <h6>כניסה למשתמשים רשומים</h6>
              <div className="form-group">
                <label htmlFor="name">שם</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="השם שלך"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">אמייל</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="האמייל שלך"
                  required
                />
              </div>

              <button type="submit" className={`btn ${styles.btn}`} onClick={handleRegister}>
                הכנס
              </button>

              <button
                type="button"
                className={`btn ${styles.btn_secondary}`}
                onClick={() => navigate("/register")}
              >
                משתמש חדש
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

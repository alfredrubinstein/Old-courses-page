import ContactHeader from "../../Images/7.jpg";
import { useNavigate } from "react-router-dom";
const Register = ({ onLogin }) => {

const navigate = useNavigate();
const handleRegister=() => navigate("/")
  return (
    <>
      <div className="Contact">
        <img src={ContactHeader} alt="Contact Header" />
      </div>

      {/* Register Form */}
      <div className="register_form container">
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <form action="">
              <h6>הרשמה למשתמשים חדשים</h6>
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

              <div className="form-group">
                <label htmlFor="password">סיסמה</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="הסיסמה שלך"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleRegister}>הירשם</button>
              <button type="button" className="btn btn-primary" onClick={() => navigate("/login")}>
                יש לך כבר חשבון?
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

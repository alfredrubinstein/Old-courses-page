import ContactHeader from "../../Images/7.jpg";
const Login = () => {
  return (
    <>
      <div className="contact">
        <img src={ContactHeader} alt="" />
      </div>

      {/* Contact Form */}
      <div className="contact_form container">
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <form action="">
              <h6>כניסה למשתמשים רשומים</h6>
              <div className="form-group">
                <label htmlFor="">שם</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="השם שלך"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="">אמייל</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="האמייל שלך"
                  required
                />
              </div>

              <button className="btn">הכנס</button>
              <button className="btn">אין לך חשבון?</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

import ContactHeader from "../../Images/7.jpg";
import "./contact.css";
const Contact = () => {
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
              <h6>צור איתנו קשר עכשיו</h6>
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

              <div className="form-group">
                <label htmlFor="">מס' טלפון</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="הכנס מספר טלפון"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="">איך נוכל לעזור</label>
                <textarea
                  rows="6"
                  className="form-control"
                  required
                  placeholder="איך נוכל לעזור"
                ></textarea>
              </div>

              <button className="btn">שלח עכשיו</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

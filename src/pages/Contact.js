import blue1 from "../assets/blue1.jpg";
import "../styles/contact.css";

function Contact() {
  return (
    <>
      <div className="services_bg pt-5">
        <div className="container">
          <h4 className="text-secondary">Contact Us</h4>
          <h1 className="w-50 text-white title">
            Fill out our simple contact form and get you a drywall construction
            quote.
          </h1>
          <p className="text-white ">Office: 541-279-6936</p>
          <p className="text-white pb-5">Sales: 541-279-0943</p>
          <hr className="hr3" />
          <div className="d-flex">
            <div className="conform">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter first name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="textarea">Message</label>
                      <textarea
                        className="form-control"
                        id="textarea"
                        rows="4"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3 subtn">
                  Submit
                </button>
              </form>
            </div>
            <div className="contimage">
              <img src={blue1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

import "../styles/footer.css";
import logo1 from "../assets/logo1.png";
import { Link } from "react-router-dom";

function Footer({ handleLinkClick }) {
  return (
    <>
      <div className="footer-bg">
        <div className="container2 pt-5">
          <hr className="hr3" />
          <div className="d-flex justify-content-start">
            <div>
              <img className="logo" src={logo1} />
            </div>
            <div className="w-50 rights">
              <br />
              <h6>Australia's #1 Construction Company</h6>
              <br />
              <h6>Office: 123456789</h6>
              <br />
              <h6>Sales: 123456789</h6>
              <br />
              <h6>All rights reserved ©</h6>
            </div>
            <div className="w-50 d-flex flex-column align-items-end">
              <Link to={"/contact"} onClick={handleLinkClick} relative="path">
                <button href="Contact" className="btn bg-white con-btn">
                  Contact Us
                </button>
              </Link>
              <p style={{ direction: "rtl", color: "white" }}>
                Cortes Contractors provides professional drywall construction
                installation and repair services to the Redmond, Bend, and
                surrounding Central Oregon areas. Residential remodel work, new
                construction projects, repair, remodeling as well as new home
                builds, hang drywall, and apply a finishing drywall texture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

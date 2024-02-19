import "../styles/header.css";
import logo from "../assets/logo1.png";

function Header() {
  const phoneNumber = "1234567890";

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <img className="logo" src={logo} />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="why">
                  Why Hire Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Contact">
                  Contact
                </a>
              </li>
              <button
                onClick={handleCallButtonClick}
                className="btn btn-warning ms-5"
              >
                Call Now
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

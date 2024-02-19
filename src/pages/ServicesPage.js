import Header from "../components/Header";
import "../styles/servicespage.css";
import toolPng from "../assets/tools.png";
import brushPng from "../assets/brush.png";
import brickPng from "../assets/brick.png";

import repair1 from "../assets/repair1.jpg";
import repair2 from "../assets/repair2.jpg";
import repair3 from "../assets/repair3.jpg";

function ServicesPage() {
  return (
    <>
      <div className="services_bg pt-5">
        <div className="container">
          <h4 className="text-secondary">
            Our Drywall and Construction Services
          </h4>
          <h1 className="w-50 text-white title">
            We Offer a Range of Drywall Construction Services to Meet Your Needs
          </h1>
          <p className="w-50 text-white pb-5">
            Cortes Contractors is located in Redmond, Oregon and is your
            preferred choice when it comes to drywall. Contact us today to go
            over your project/repair or request an estimate.
          </p>
          <hr className="hr3" />
          <div className="d-flex align-items-center justify-content-center pb-5">
            <div className="w-50 services-card text-center">
              <img className="png" src={toolPng} alt="tool" />
              <h3 className="text-white">Drywall Repair</h3>
              <p className="text-white para">
                We’ll fix any drywall hole, any size, any place in your home or
                office. Our expert construction technicians will match the
                texture of your wall and flawlessly blend the patch in with its
                surroundings. You won’t even be able to tell there was a hole in
                the first place!
              </p>
            </div>
            <div className="w-50 image">
              <img src={repair1} alt="repair1" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center pb-5">
            <div className="w-50 image">
              <img src={repair2} alt="repair1" />
            </div>
            <div className="w-50 services-card text-center">
              <img className="png" src={brushPng} alt="tool" />
              <h3 className="text-white">Drywall Installation</h3>
              <p className="text-white para">
                Are you ready to finish that extra room, garage, or are you
                building a new home with new drywall? We specialize in large and
                small drywall construction installation projects, new
                construction projects and more. Our team can complete the entire
                project in less time than other companies and leave you with a
                beautiful, revitalized space.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center pb-5">
            <div className="w-50 services-card text-center">
              <img className="png" src={brickPng} alt="tool" />
              <h3 className="text-white">Drywall Repair</h3>
              <p className="text-white para">
                Uneven textured walls are not a good look at all. You want to
                have mechanics that know how to match them up properly, our
                Texture-Matching construction team will restore your walls and
                ceiling so there are no marks, lines, or shadows in your walls.
              </p>
            </div>
            <div className="w-50 image">
              <img src={repair3} alt="repair1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;

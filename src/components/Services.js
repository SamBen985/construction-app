import React from "react";
import "../styles/services.css";
import toolPng from "../assets/tools.png";
import brushPng from "../assets/brush.png";
import brickPng from "../assets/brick.png";
import { Link } from "react-router-dom";

function Services() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="services-bg">
        <div className="container">
          <hr />
          <hr />
          <div className="d-flex">
            <div>
              <h4 className="text-secondary s-title">
                Construction Is What We Do
              </h4>
              <h1 className="h-title s-title">
                X Construction Lead in Drywall Construction Quality and
                Reliability
              </h1>
              <p className="h-text text-white">
                We’ll clean up every speck of dust before we leave, so you won’t
                have to deal with any cleanup after the job is done.
              </p>
            </div>
            <Link to={"/contact"} onClick={handleLinkClick} relative="path">
              <button id="serbtn" className="btn btn-light">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="d-flex justify-content-around co">
            <Link to={"/services"} onClick={handleLinkClick} relative="path">
              <div className="box">
                <div>
                  <img src={toolPng} />
                </div>
                <div>
                  <h3>Drywall Repair</h3>
                </div>
              </div>
            </Link>
            <Link to={"/services"} onClick={handleLinkClick} relative="path">
              <div className="box">
                <img src={brushPng} /> <h3>Drywall Installation</h3>
              </div>
            </Link>
            <Link to={"/services"} onClick={handleLinkClick} relative="path">
              <div className="box">
                <img src={brickPng} /> <h3>Texture Matching</h3>
              </div>
            </Link>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

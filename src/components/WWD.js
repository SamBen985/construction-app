import "../styles/wwd.css";
import { Link } from "react-router-dom";

function WWD({ handleLinkClick }) {
  return (
    <>
      <div className="wwd">
        <div className="container">
          <hr />
          <div className="d-flex">
            <div>
              <h4 className="text-secondary title">
                Construction Is What We Do
              </h4>
              <h1 className="w-50 htitle title">
                X Construction Lead in Drywall Construction Quality and
                Reliability
              </h1>
            </div>
            <Link to={"/contact"} onClick={handleLinkClick} relative="path">
              <button
                onClick={handleLinkClick}
                id="disbtn"
                className="btn btn-light"
              >
                Contact Us
              </button>
            </Link>
          </div>
          <hr className="hr2" />
          <div className="d-flex">
            <div className="left title">
              <h2 className="mb-3 mt-3">About X Contractors</h2>
              <p>
                If you need a drywall specialist in Central Oregon, we can help.
                Our drywall contractors can take care of all your drywall
                installation, repair, or finishing needs. Cortes Contractors is
                a locally owned and operated drywall business. Cortes
                Contractors of Redmond, Oregon brings construction experience to
                the table and we specialize in restoring and replacing your
                damaged drywall in your home or office. Our construction team is
                comprised of dedicated professionals with great attention to
                detail and an emphasis on customer service. We understand that
                our construction job is more than just repairing a hole in your
                wall, we’re restoring your home or business back to its original
                condition. When we visit your home or business, you don’t have
                to worry about us leaving a mess. We cover the area before we
                start work, protect your personal belongings, and clean up
                before we leave. Whether you need one tiny drywall whole
                repaired, or multiple large holes are taken care of, new
                construction, adding a room, give Cortes Contracting a call for
                a free quote. Find out why we are Central Oregon's most trusted
                drywall repair company.
              </p>
            </div>
            <div className="right">
              <div className="img2"></div>
            </div>
          </div>
          <div className="d-flex">
            <div className="left2">
              <div className="img2"></div>
            </div>
            <div className="right2 mt-5">
              <hr />
              <h2 className="title">Quick & Easy Drywall Construction</h2>
              <p className="text-secondary txtx">
                Most drywall repair jobs can be finished in just a couple of
                hours. We’ll be in and out of your home or business in very
                quickly, leaving you with a flawlessly drywall patched wall.
              </p>
              <h2 className="title">Local Construction Company</h2>
              <p className="text-secondary txtx">
                We are a locally owned and operated drywall construction
                business. You’re more than just a customer to us. You’re a
                valued client. You’re a neighbor. We work hard to maintain an
                impeccable reputation in our community.
              </p>
              <h2 className="title">Quality Drywall Company</h2>
              <p className="text-secondary txtx">
                Our construction team has perfected a drywall repair technique
                that’s fast, effective, and leaves you with stunning results. We
                pride ourselves in executing every job to the highest standard,
                and we’ll make sure you’re 100% satisfied with our work before
                considering the job complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WWD;

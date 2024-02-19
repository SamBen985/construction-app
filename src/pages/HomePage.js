import home1 from "../assets/home1.jpeg";
import Header from "../components/Header";
import Services from "../components/Services";
import WWA from "../components/WWA";
import WWD from "../components/WWD";
import "../styles/homepage.css";

function HomePage() {
  return (
    <>
      <div className="home1"></div>
      <div className="bg-text">
        <h1 className="title1">Drywall Construction Installation and Repair</h1>
        <p className="para">
          Family owned and operated construction business inside and out since
          2018
        </p>
      </div>
      <WWD />
      <WWA />
      <Services />
    </>
  );
}

export default HomePage;

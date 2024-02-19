import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WWD from "./components/WWD";
import WWA from "./components/WWA";
import Contact from "./pages/Contact";

function App() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/about"
          element={<WWD handleLinkClick={handleLinkClick} />}
        />
        <Route path="/why" element={<WWA />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer handleLinkClick={handleLinkClick} />
    </>
  );
}

export default App;

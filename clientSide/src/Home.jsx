import React, { useState } from "react";
import "./Home.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import ModalForm from "./components/ModalForm";
import Footer from "./components/Footer";

const services = [
  { id: "plumber", name: "Plumber", emoji: "🔧", description: "Leak repairs, installations, and maintenance." },
  { id: "electrician", name: "Electrician", emoji: "💡", description: "Wiring, lighting, and all electrical work." },
  { id: "carpenter", name: "Carpenter", emoji: "🪚", description: "Woodwork, furniture repair, and installation services." },
  { id: "cook", name: "Cook", emoji: "🍳", description: "Home-cooked meals prepared by experienced cooks." },
];


const stateCity = {
  Uttar_Pradesh: ["Noida", "Greater Noida", "Meerut", "Gorakhpur"],
  Delhi: ["New Delhi", "South Delhi", "North Delhi"],
};

const formspreeUrl = "https://formspree.io/f/mwvkdwdv";

function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  return (
    <>
      <div className="background-wrapper">
        <img src="/images/new.jpg" alt="Background" />
      </div>

      <div className="container">
        <Header />
        <Hero />
        <Services
          services={services}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          setSelectedService={setSelectedService}
        />
        <About />
        <Contact formspreeUrl={formspreeUrl} />
        <Terms />
        <Privacy />
        <ModalForm
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          stateCity={stateCity}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={setSelectedDistrict}
          formspreeUrl={formspreeUrl}
        />
        <Footer />
      </div>
    </>
  );
}

export default Home;

import React from "react";
import Slider from "../nav/Servicios/Slider/Slider.jsx";
import Servicios from "../nav/Servicios/Servicios.jsx";

const Section3 = () => {
  return (
    <div className="section sec3 ServiciosContainer">
      <Servicios />
      <Slider />
      <div className="fish" data-speed="2"></div>
      <div className="fish" data-speed="2"></div>
      <div className="fish" data-speed="2"></div>
      <div className="fish" data-speed="2"></div>
    </div>
  );
};

export default Section3;

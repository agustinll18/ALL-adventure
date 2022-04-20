import React from "react";
import Slider from "../nav/Servicios/Slider/Slider.jsx";
import Servicios from "../nav/Servicios/Servicios.jsx";

const Section3 = () => {
  return (
    <div className="section sec3Night ServiciosContainer">
      <Servicios />
      <Slider />
      <div className="fish" data-speed="2.5"></div>
      <div className="fish" data-speed="4"></div>
      <div className="fish" data-speed="8"></div>
      <div className="fish" data-speed="5"></div>
    </div>
  );
};

export default Section3;

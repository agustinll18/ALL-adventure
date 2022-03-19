import React from "react";
import Code from "./codeVsc/Code.jsx";
import Servicios from "./Servicios/Servicios.jsx";
import $ from "jquery";
//ICONS
/* 
import angular from "../../ICONS/icons8-angularjs-56.png"; */
$(document).ready(function(){
  $('.carousel').carousel();
});

const bg = document.getElementsByClassName("bg");
const moon = document.getElementsByClassName("moon");
const mountain = document.getElementsByClassName("mountain");
const road = document.getElementsByClassName("road");
const text = document.getElementsByClassName("text");
window.addEventListener("scroll", function () {
  const value = window.scrollY;
  bg.style.top = value * 0.89 + "px";
  moon.style.left = -value * 0.75 + "px";
  mountain.style.top = -value * 0.25 + "px";
  road.style.top = value * 0.05 + "px";/* 
  text.style.bottom = value * 10.51 + "px"; */
});
const Nav = () => {
  var images = [
    "https://lesser-dawns.000webhostapp.com/multimedia/recursos/bg(1).png",
    "https://lesser-dawns.000webhostapp.com/multimedia/recursos/mountain-removebg%20(1).png",
    "https://lesser-dawns.000webhostapp.com/multimedia/recursos/road-removebg%20(1).png",
    "https://lesser-dawns.000webhostapp.com/multimedia/recursos/moon-removebg%20(1).png",
  ];

  return (
    <div /* className="dark-theme" */>
      <main id="mainSection">
        <img src={images[0]} className="bg" alt="background" />
        <img src={images[1]} className="mountain" alt="moon" />
        <img src={images[2]} className="road" alt="road" />
        <img src={images[3]} className="mountain" alt="mountain" />
        <aside>
          <p>
            Scroll Up and Down this page to see the parallax scrolling effect.
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling. Tip: Try to remove the
            background-attachment property to remove the scrolling effect.
          </p>
        </aside>
      </main>
      {/* <hr id="codeVsc" />
      <Code />
      <hr id="codeVsc" />
      <div className="ServiciosContainer">
        <Servicios />
      </div>
      <hr id="codeVsc" />
      <div class="containerFotos">
        <div class="animated fadeInLeft"></div>
        <div class="animated fadeInTop"></div>
        <div class="animated fadeInRight"></div>
      </div>
      <div class="carousel">
        <a class="carousel-item" href="#one!"><img src={angular}/></a>
        <a class="carousel-item" href="#two!"><img src={}/></a>
        <a class="carousel-item" href="#three!"><img src={}/></a>
        <a class="carousel-item" href="#four!"><img src={}/></a>
        <a class="carousel-item" href="#five!"><img src={}/></a> 
      </div>*/}
    </div>
  );
};

export default Nav;

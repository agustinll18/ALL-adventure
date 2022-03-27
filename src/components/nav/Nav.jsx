import React from "react";
import $ from "jquery";
//ICONS
/* 
import angular from "../../ICONS/icons8-angularjs-56.png"; */
$(document).ready(function () {
  $(".carousel").carousel();
});

const bg = document.getElementsByClassName("bg");
const moon = document.getElementsByClassName("moon");
const mountain = document.getElementsByClassName("mountain");
const road = document.getElementsByClassName("road");/* 
const text = document.getElementsByClassName("text"); */
window.addEventListener("scroll", function () {
  const value = window.scrollY;
  bg.style.top = value * 0.89 + "px";
  moon.style.left = -value * 0.75 + "px";
  mountain.style.top = -value * 0.25 + "px";
  road.style.top = value * 0.05 + "px"; /* 
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
        <h1  className="saludo">Hi!, I am Agustín LLadós</h1>
        <img src={images[0]} className="bg" alt="background" />
        <img src={images[1]} className="mountain" alt="moon" />
        <img src={images[2]} className="road" alt="road" />
        <img src={images[3]} className="mountain" alt="mountain" />
        
        <aside> 
          <h1 id="navH">Hi! I am Agustín LLadós</h1>
          <p>
            I have 20 years, born in 2002, and I am a full-stack developer improving my back-end's knowledge.
            I like programming in the front-end area, use some libraries and get some challenges.
            <br />
            My hobbies are do sport, I love Tennis and Futbol, go out with my friends and eat with my family on Sunday   {/* I graduated from economic science in my school "Emaus" with an 7.66
            average in highschool and awarded for "the best friend in the
            class" , then I started to see what was i would like to dedicate in
            my professional career. First I looked up to be a AI developer but
            after I do a basic AI course based in the principles of AI , I wasnt
            completely sure. After do my research and see videos from people who
            work and they mastered in their area I decided that I want to became
            a fullstack developer. (hahah I didnt realized the AMOUNT OF HARD
            WORK I WILL HAVE TO DO). Meanwhile I was working in one company to
            get money and doing a course in Python and Front-end developer in
            Udemy ,I was looking a place to study and instruct me in the
            fullstack area afterwards I found CoderHouse that gives me all i was
            searching SO I STARTED MY STUDIES*/}
          </p>
        </aside>
      </main>
    </div>
  );
};

export default Nav;

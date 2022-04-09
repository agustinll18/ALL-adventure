import React, { Component } from "react";
import $ from "jquery";
import "./jquery.pagepiling";
import "./jquery.pagepiling.css";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import Section2 from "./components/section2/Section2.jsx";
import Section3 from "./components/section3/Section3.jsx";
import Section4 from "./components/section4/Section4.jsx";
import Language from "./components/language/Language";
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".birds").forEach((birds) => {
    const speed = birds.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    birds.style.transform = `translateX(${x}px) translateY(${y}px) `;
    birds.style.transform = `-o-translateX(${x}px) -o-translateY(${y}px)  `;
  });
};

/* Passive scrolling */
window.addEventListener('touchmove', event =>{ 
    console.log(event);
}, {passive: true});
class App extends Component {
  /* PAGELPILLING */
  componentDidMount() {
    $(document).ready(function () {
      $("#pagepiling").pagepiling({
        navigation: {
          textColor: "#fff",
          bulletscolor: "#fff",
          position: "right",
          tooltips: [
            "About Me",
            "Education & Projects",
            "Services",
            "Contact ",
          ],
        },
      });
    });
    let section = document.querySelectorAll("section");
    let menu = document.querySelectorAll("header nav a");

    window.onscroll = () => {
      section.forEach((i) => {
        let top = window.scrollY;
        let offset = i.offsetTop - 1;
        let height = i.offsetHeight;
        let id = i.getAttribute("id");

        if (top >= offset && top < offset + height) {
          menu.forEach((link) => {
            link.classList.remove("active");
            document
              .querySelector("header nav a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      });
    };
  }

  render() {
    return (
      <div>
        <Language />
        <header className="App-header">
          <Header />
        </header>

        <div id="pagepiling">
          <div class="section sec1" id="edPr">
            <Nav />
          </div>
          <Section2 />
          <Section3 />
          <Section4 />
          
        </div>
      </div>
    );
  }
}
export default App;
/*import "./App.css";
  
import "./pageP/jquery.pagepiling";


import Nav from "./components/nav/Nav.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import CustomizedMenus from "./components/language/Language"; 
import $ from "jquery";

function App() {
  let section = document.querySelectorAll("section");
  let menu = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    section.forEach((i) => {
      let top = window.scrollY;
      let offset = i.offsetTop - 150;
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

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
  reveal();
  $(document).ready(function () {
    $(".red").click(function () {
      $("#bodyCode6").text("Hello world!");
    });
  });
  $(document).ready(function () {
    $("#pagepiling").pagepiling({
      navigation: {
        textColor: "#ffffff",
        bulletsColor: "#ffffff",
        position: "right",
        tooltips: ["Norway", "Switzerland", "Austria", "Italy"],
      },
    });
  });
  $(document).ready(function () {
    $('#pagepiling').pagepiling();
});*/
import React, { Component } from "react";
import $ from "jquery";
import "./jquery.pagepiling";
import "./jquery.pagepiling.css";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import Code from "./components/nav/codeVsc/Code";
import Servicios from "./components/nav/Servicios/Servicios";
class App extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#pagepiling").pagepiling({
        navigation: {
          textColor: "#000000",
          bulletscolor: "#000000",
          position: "right",
          tooltips: ["About Me", "Education & Projects", "sec3", "sec4"],
        },
      });
    });
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 1;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();
    let section = document.querySelectorAll("section");
    let menu = document.querySelectorAll("header nav a");

    window.onscroll = () => {
      section.forEach((i) => {
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
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
        <header className="App-header">
          <Header />
        </header>

        <div id="pagepiling">
          <div class="section sec1" id="edPr">
            <Nav />
          </div>
          <div class="section sec2 " id="#codeVsc">
            <div class="ocean">
              <Code  />
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
            
          </div>
          <div class="section sec3 ServiciosContainer">
            <Servicios />
          </div>
          <div class="section sec4">
            {/* 
            <Servicios /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import $ from "jquery";
import "./jquery.pagepiling";
import "./jquery.pagepiling.css";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import Code from "./components/nav/codeVsc/Code";
import Servicios from "./components/nav/Servicios/Servicios";
import Contact from "./components/contact/Contact";
import Slider from "./components/nav/Servicios/Slider/Slider";
import Language from "./components/language/Language";
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
          <div className="section sec2 row " id="#codeVsc">
            <div className="ocean">
              <div className="pesca">
                <div className="fisherman">
                  <div className="body"></div>
                  <div className="arm"></div>
                  <div className="legs">
                    <div className="leg1">
                      <div className="legLow_1"></div>
                    </div>
                    <div className="leg2">
                      <div className="legLow_2"></div>
                    </div>
                  </div>
                  <div className="headF"></div>
                  <div className="stick"></div>
                  <div className="caña p1 " id="myP">
                    <div className="cuerda c1"></div>
                    <div className="bola b1"></div>
                  </div>
                </div>

                <div className="muelle"></div>
                <div className="muelle"></div>
                <div className="muelle"></div>
              </div>
              <Code />
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
            <div className="plane"></div>
            <div className="dog"></div>
            <div className="birds"></div>
            <div className="birds"></div>
            <div className="birds"></div>
            <div className="birds"></div>
            <div className="birds"></div>
            <div className="birds"></div>
          </div>

          <div className="section sec3 ServiciosContainer">
            <Servicios />
            <Slider />
          </div>
          <div className="section sec4">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
/*  */

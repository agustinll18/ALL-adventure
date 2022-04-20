import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import $ from "jquery";

export default function NavigationBar() {
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 1 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
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

  /* DARK MODE */
  /* $(document).ready(function(){
    $("label").click(function(){
      $("sec1").toggleClass("sec1Night");
    });
  }); */

  /*  function myFunction() {
    var element = document.getElementsById("edPr");
    element.classList.toggle("sec1Night");
  } */
  $(document).ready(function(){
    $(".slider").on("click", function(){
      $("div.sec1").toggleClass("sec1Night");
      $(".mainSection").toggleClass("mainSectionDark");
      $("div.sec2").toggleClass("sec2Night");
      $("div.sec3").toggleClass("sec3Night");
    });
  });
  return (
    <div className={`navbar ${stickyClass}`} id="navbarContainer">
      <Navbar collapseOnSelect expand="lg" bg="lg" variant="lg" id="navbar">
        <Container class="container-fluid" id="containerUl">
          <Navbar.Brand href="#" id="brandN">
            ALL
          </Navbar.Brand>
          <div id="switchContainer">
            <label class="switch" id="switch-dark-mode">
              <input type="checkbox"></input>
              <span class="slider round" id="switch-dark-mode"></span>
            </label>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

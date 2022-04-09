import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

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

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  reveal();
  /* DARK MODE */
  /* $(document).ready(function(){
    $("label").click(function(){
      $("sec1").toggleClass("sec1Night");
    });
  }); */

  function myFunction() {
    var element = document.getElementsById("edPr");
    element.classList.toggle("sec1Night");
 }
  return (
    <div className={`navbar ${stickyClass}`} id="navbarContainer">
      <Navbar collapseOnSelect expand="lg" bg="lg" variant="lg" id="navbar">
        <Container class="container-fluid" id="containerUl">
          <Navbar.Brand href="#home" id="brandN">
            ALL
          </Navbar.Brand>
          <input type="checkbox" id="switch" />
          <label for="switch" onClick="myFunction()"></label>
        </Container>
      </Navbar>
    </div>
  );
}

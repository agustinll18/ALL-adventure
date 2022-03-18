import React, { useState, useEffect } from "react";

export default function Navbar() {
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

  /* var icon = document.getElementById ("icon");
  icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains ("dark-theme")){
           icon.src = "images/sun.png";
      }else{
      }
  } */

  return (
    <div className={`navbar ${stickyClass}`} id="navbarContainer">
      <nav
        class="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        id="navbar"
      >
        <div class="container-fluid">
          <a class="navbar-brand" id="brand" href="#">
            ALL
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#edPr">
                  Education & Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#cardService">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

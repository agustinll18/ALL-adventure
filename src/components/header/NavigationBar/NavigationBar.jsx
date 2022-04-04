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
  $(document).ready(function(){
    $("label").click(function(){
      $("sec1").toggleClass("sec1Night");
    });
  });
/* IDIOMAS */
  $(document).ready(function () {
    $(".textES").click(function () {
      $(".saludo").text("Hola! soy Agustín LLadós");
      $("#navH").text("Hola! soy Agustín LLadós").css("fontSize", "38px");
      $("#navP").text("Tengo 20 años, nacido en 2002, y soy desarrolador Full-stack mejorando mi conocimiento en el area del Back-end. Me gusta programar en el area del Front-end, usar librerias y hacer frente a los desafios que se presenten. Mis hobbis son : hacer deporte, especialmente me gusta el Tenis y el futbol, salir con amigos y comer con mi familia en los domingos ")

      $("#filesVsc").text("Archivos");
      $(".asd").text("> Educacion Y Proyectos <");
      $("#bodyCode6").text("Graduado en ciencias economicas en el Colegio Emaús, con un promedio de 7,66 y premiado como 'Mejor Compañero del Curso'")
    });
  });
  $(document).ready(function () {
    $(".textEN").click(function () {
      $(".saludo").text("Hi! I am Agustín LLadós");
      $("#navH").text("Hi! I am Agustín LLadós").css("fontSize", "38px");/* .css("fontSize", "38px"); */;
      $("#navP").text("I have 20 years, born in 2002, and I am a full-stack developer improving my back-end's knowledge. I like programming in the front-end area, use some libraries and get some challenges. My hobbies are: do sport, I love Tennis and Futbol, go out with my friends and eat with my family on Sunday. ")

      $("#filesVsc").text("Files");
      $(".asd").text("> Education & Proyects <");
      $("#bodyCode6").text("Graduated from economic science in my school 'Emaus' with an 7.66 average in highschool and awarded for 'the best friend in the class'")
    });
  });
  return (
    <div className={`navbar ${stickyClass}`} id="navbarContainer">
      <Navbar collapseOnSelect expand="lg" bg="lg" variant="lg" id="navbar">
        <Container class="container-fluid" id="containerUl">
          <Navbar.Brand href="#home" id="brandN">
            ALL
          </Navbar.Brand>
          <input type="checkbox" id="switch" />
          <label for="switch"></label>
        </Container>
      </Navbar>
    </div>
  );
}

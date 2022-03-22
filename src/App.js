
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
class App extends Component {
  /* PAGELPILLING */
  componentDidMount() {
    $(document).ready(function () {
      $("#pagepiling").pagepiling({
        navigation: {
          textColor: "#fff",
          bulletscolor: "#fff",
          position: "right",
          tooltips: ["About Me", "Education & Projects", "Services", "Contact "],
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
  /* PENDULO */

  render() {
    /* $(window).scroll(function() {
      var windowYmax = 1;
      var scrolledY = $(window).scrollTop();
    
      if (scrolledY > windowYmax) {
    
        $('#myp').addClass("penduloScroll");
      } else {
        $('#myp').removeClass("penduloScroll");
        $('#myp').addClass("pendulo");
      }
    }); */
    /*window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
       if (document.documentElement.scrollTop < 130) {
        document.getElementById("myP").className = "";
      } else if (
        1 < document.documentElement.scrollTop &&
        document.documentElement.scrollTop < 2
      ) {
        document.getElementById("myP").className = "penduloScroll";
      } else {
        document.getElementById("myP").className = "penduloScroll";
      }
    } */

    /* $(document).ready(function(){
      if ( $('div.section.sec4').hasClass('active') ) {
        $('.caña').toggleClass('caña',false)
      }
    }); */
     /*  $(document).ready(function(){
        $("button").click(function(){
          $(".caña").toggleClass("caña",false);
        });
      });


    $(function() {
      var caña = $(".caña");
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
      
          if (scroll >= 2) {
              caña.toggleClass("caña",false);
          } else {
              caña.removeClass("caña-alt").addClass('caña');
          }
      });
  }); */

  $(document).ready(function(){
    $("sec3").on({
      mouseout: function(){
        $("caña").css("display","none")
      }
    })
  })
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
              <div class="pesca">
                <div class="fisherman">
                  <div class="body"></div>
                  <div class="arm"></div>
                  <div class="legs">
                    <div class="leg1">
                      <div class="legLow_1"></div>
                    </div>
                    <div class="leg2">
                      <div class="legLow_2"></div>
                    </div>
                  </div>
                  <div class="headF"></div>
                  <div class="stick"></div>
                  <div class="caña p1 " id="myP">
                    <div class="cuerda c1"></div>
                    <div class="bola b1"></div>
                  </div>
                </div>

                <div class="muelle"></div>
                <div class="muelle"></div>
                <div class="muelle"></div>
              </div>
              <Code />
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
          </div>
          <div class="section sec3 ServiciosContainer">
            <Servicios />
          </div>
          <div class="section sec4">
            <Contact />
            
          </div>
        </div>
      </div>
    );
  }
}
export default App;
/*  */

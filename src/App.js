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
});
  return (
    <div className="App">
      <div id="pagepiling">
        <div class="section section-one">
          <h2>Norway</h2>
        </div>

        <div class="section section-two">
          <h2>Switzerland</h2>
        </div>

        <div class="section section-three">
          <h2>Austria</h2>
        </div>

        <div class="section section-four">
          <h2>Italy</h2>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="../jquery.pagepiling.js"></script>
    
      
      <nav className="App-nav">
       <Nav/>
      </nav>
      <footer className="App-footer">
        <Contact/>
      </footer>
      <CustomizedMenus/> 
    </div>
  );
}

export default App;
*/
import React, { Component } from "react";
import $ from "jquery";
import "./jquery.pagepiling";
import "./jquery.pagepiling.css";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import Code from "./components/nav/codeVsc/Code";
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
  };
  
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
          <div class="section sec2 reveal" id="#codeVsc">
            <Code class="section sec2 reveal"/>
          </div>
          <div class="section sec3"><h2>1</h2></div>{/* 
          <div class="section sec4"><h2>2</h2></div> */}
        </div>
      </div>
    );
  }
}
export default App;

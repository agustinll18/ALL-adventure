import React from "react";
import SideVscEN from "./body/SideVsc";
import BodyEN from "./body/Body";
import $ from "jquery";
/* import Button from 'react-bootstrap/Button'; */
const Code = () => {
  const share = () => {
    alert("Gracias por compartir nuestra pagina!");
  };
  /* $(document).ready(function(){
    $("#red").click(function(){
      $("#bodyCode6").text("Hello world!");
    })
  }); */
  $(document).ready(function(){
    $("#textES").click(function(){
      $("#bodyCode6").text("Hello world!");
    })
  });
  $(document).ready(function(){
    $("#textEN").click(function(){
      $("#bodyCode6").text(`I graduated from economic science in my school "Emaus" with an 7.66 average in highschool and awarded for "the best friend in the class",then I started to see what was i would like to dedicate in myprofessional career. First I looked up to be a AI developer but after Ido a basic AI course based in the principles of AI , I wasnt completelysure. After do my research and see videos from people who work and theymastered in their area I decided that I want to became a fullstackdeveloper. (hahah I didnt realized the AMOUNT OF HARD WORK I WILL HAVETO DO). Meanwhile I was working in one company to get money and doing acourse in Python and Front-end developer in Udemy ,I was looking a placeto study and instruct me in the fullstack area afterwards I foundCoderHouse that gives me all i was searching SO I STARTED MY STUDIES`);
    })
  });
 
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("codeR").className = "test";
  } else {
    document.getElementById("codeR").className = "";
  }
}
  return (
    <section className="code clearfix  " id="codeR">
      <div classname="container reveal clearfix" id="navCode">
        <p className="logo">ALL</p>

        <span className="circulos" id="red"></span>
        <span className="circulos" id="yellow"></span>
        <span className="circulos" id="green"></span>

        <p className="nameFile"> Portfolio: Agustin LLados </p>

        <div className="minimizar"></div>
        <div className="closers" onClick={share}>
          <span className="close"></span>
          <span className="close2"></span>
        </div>
      </div>
      <SideVscEN />
      <BodyEN />
    </section>
  );
};
export default Code;

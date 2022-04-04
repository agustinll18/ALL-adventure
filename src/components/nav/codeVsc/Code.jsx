import React from "react";
import SideVscEN from "./body/SideVsc";
import BodyEN from "./body/Body";
const Code = () => {
  const share = () => {
    alert("Gracias por compartir nuestra pagina!");
  };


  return (
    <section className="code clearfix col-6 " id="codeR">
      <div classname="container reveal clearfix " id="navCode">
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

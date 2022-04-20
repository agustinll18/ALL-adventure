import React from "react";
import SideVscEN from "./body/SideVsc";
import BodyEN from "./body/Body";
const Code = () => {
  return (
    <section className="code clearfix col-6 " id="codeR">
      <div
        classname="container reveal clearfix container-fluid mt-3 "
        id="navCode"
      >
        <div class="row">
          <div class="col-4">
            <p className="logo">ALL</p>

            <span className="circulos" id="red"></span>
            <span className="circulos" id="yellow"></span>
            <span className="circulos" id="green"></span>
          </div>

          <div class="col-4">
            <p className="nameFile"> Portfolio: Agustin LLados </p>
          </div>
        </div>
      </div>

      <SideVscEN />
      <BodyEN />
    </section>
  );
};
export default Code;

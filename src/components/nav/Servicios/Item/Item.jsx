import React from "react";

export default function Item(productos) {
  return (
    <div id="cardService">
      <div class="cardImg">
        <img
          classname="cardItem"
          src={productos.pic}
          variant="top"
          alt="product pic"
        />
      </div>

      <div class="cardSection">
        <h3 className="productosModelo">{productos.modelo}</h3>
        <progress
          value={productos.porcentaje}
          max="100"
          class="progressResponsiveMobile" /* style={{width: "80%",height: "60px",backgroundColor: "linear-gradient(to bottom, white, black)",margin:"40% 10% 0%"}} */
        ></progress>
        <h4 className="porcentajeResponsive"> {productos.porcentaje}%</h4>

        <ul className="herramientas">
          <li>
            <p className="liTools">{productos.herramienta1}</p>
          </li>
          <li>
            <p className="liTools">{productos.herramienta2}</p>
          </li>
          <li>
            <p className="liTools">{productos.herramienta3}</p>
          </li>
        </ul>
      </div>

      <div class="overlay">
        <img
          src="https://lesser-dawns.000webhostapp.com/multimedia/recursos/rbg/icons8-ship-50-removebg-preview.png"
          alt=""
        />
        <progress
          value={productos.porcentaje}
          max="100"
          class="progress000" /* style={{width: "80%",height: "60px",backgroundColor: "linear-gradient(to bottom, white, black)",margin:"40% 10% 0%"}} */
        ></progress>
        <h4> {productos.porcentaje}%</h4>
      </div>
    </div>
  );
}

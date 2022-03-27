import React from "react";

export default function Item(productos) {
  return (
    <div classname="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
      <div>
        <div>
          <div sm>
            <div id="cardService">
              <div class="cardImg">
                <img
                  classname="cardItem"
                  src={productos.pic}
                  variant="top"
                  alt="product pic"
                />
              </div>

              <div>
                <div
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    top: "35px",
                    fontSize: "12px",
                  }}
                >
                  <h1 style={{ fontSize: "22px", fontWeight: "bolder",margin:"25px" }}>{productos.modelo}</h1>
                </div>
                <div
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    top: "35px",
                  }}
                >
                  <h2 /* style={{width: "120px"}} */>{productos.precio}</h2>
                </div>
              </div>

              <div class="overlay">
                <img src="https://lesser-dawns.000webhostapp.com/multimedia/recursos/rbg/icons8-ship-50-removebg-preview.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

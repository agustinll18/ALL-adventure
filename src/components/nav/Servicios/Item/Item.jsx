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
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "900",
                      margin: "25px",
                    }}
                  >
                    {productos.modelo}
                  </h3>
                </div>
                <div
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    top: "35px",
                  }}
                >
                  {" "}
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      margin: "5px",
                    }}
                  >
                    {productos.marca}
                  </p>
                </div>
              </div>

              <div class="overlay">
                <img
                  src="https://lesser-dawns.000webhostapp.com/multimedia/recursos/rbg/icons8-ship-50-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

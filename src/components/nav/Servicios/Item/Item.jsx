import React from "react";

export default function Item(productos) {
  return (
    <div classname="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
      <div /* classname="reveal" */>
        <div>
          <div sm>
            <div
              id="cardService"
            >
              <div>
                <img
                  classname="cardItem"
                  src={productos.pic}
                  variant="top"
                  style={{
                    position: "relative",
                    width: "180px",
                    height: "160px",
                    justifyContent: "center",
                    top: "35px",
                  }}
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
                  <h1 style={{ fontSize: "22px" }}>{productos.modelo}</h1>
                </div>
                <div
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    top: "35px",
                  }}
                >
                  <h2>{productos.precio}</h2>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

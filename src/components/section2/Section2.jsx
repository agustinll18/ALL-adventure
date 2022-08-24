import React, { Suspense, lazy } from "react";
const Code = lazy(() => import("../nav/codeVsc/Code"));

const Section2 = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="section sec2 row " id="#codeVsc">
        <div className="ocean">
          <div className="pesca">
            <div className="fisherman" data-speed="3">
              <div className="body"></div>
              <div className="arm"></div>
              <div className="legs">
                <div className="leg1">
                  <div className="legLow_1"></div>
                </div>
                <div className="leg2">
                  <div className="legLow_2"></div>
                </div>
              </div>
              <div className="headF"></div>
              <div className="stick"></div>
              <div className="caña p1 " id="myP">
                <div className="cuerda c1"></div>
                <div className="bola b1"></div>
              </div>
            </div>

            <div className="muelle"></div>
            <div className="muelle"></div>
            <div className="muelle"></div>
          </div>
          <Code />
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>

        <div className="plane"></div>
        <div className="dog"></div>

        <div className="birds" data-speed="0.5"></div>
        <div className="birds" data-speed="1"></div>
        <div className="birds" data-speed="3"></div>
        <div className="birds" data-speed="1"></div>
        <div className="birds" data-speed="2"></div>
        <div className="birds" data-speed="0.5"></div>
      </div>
    </Suspense>
  );
};

export default Section2;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

const Contact = () => {
  $(document).ready(function () {
    $(".subMen").on({
      mouseenter: function () {
        $(".contactContainer").css("opacity", "1");
        $(".contactContainer").css(
          "-webkit-box-shadow",
          " 11px 15px 19.5px 3.5px #0088ffc1"
        );
        $(".contactContainer").css(
          "-moz-box-shadow",
          "11px 15px 19.5px 3.5px #0088ffc1"
        );
        $(".contactContainer").css(
          "box-shadow",
          " 11px 15px 19.5px 3.5px #0088ffc1"
        );
      },
      mouseleave: function () {
        $(".contactContainer").css("opacity", "0");
      },
    });
    $(".contactContainer").on({
      mouseenter: function () {
        $(this).css("opacity", "1");
      },
      mouseleave: function () {
        $(this).css("opacity", "0");
      },
    });
  });

  return (
    <div class="col-12">
      <div className="contact col-3">
        <div className="contactContainer">
          <div className="glass">
            <h2>Contact</h2>
            <div class="mb-2">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <h4>Email :</h4>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-2">
              <label
                for="exampleFormControlTextarea1"
                class="form-label"
              ></label>
              <h4>Message :</h4>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="subButton" type="submit" onClick="">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div class="subSec">
        <div class="dialogContainer">
          <p className="dialog">Please give me the flashlight</p>
        </div>
        <div className="picoDialog"></div>

        <div className="subMen"></div>
      </div>
    </div>
  );
};

export default Contact;

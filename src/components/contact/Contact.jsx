import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".moveMen1").forEach((moveMen1) => {
    const speed = moveMen1.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    moveMen1.style.transform = `translateX(${x}px) translateY(${y}px) rotateY(-180deg) rotateZ(60deg) `;
    moveMen1.style.transform = `-o-translateX(${x}px) -o-translateY(${y}px)  `;
  });
  this.querySelectorAll(".dialogMove").forEach((dialogMove) => {
    const speed = dialogMove.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    dialogMove.style.transform = `translateX(${x}px) translateY(${y}px)  `;
    dialogMove.style.transform = `-o-translateX(${x}px) -o-translateY(${y}px)  `;
  });
  this.querySelectorAll(".picoDialogMove").forEach((picoDialogMove) => {
    const speed = picoDialogMove.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    picoDialogMove.style.transform = `translateX(${x}px) translateY(${y}px) rotateZ(45deg) `;
    picoDialogMove.style.transform = `-o-translateX(${x}px) -o-translateY(${y}px) rotateZ(45deg) `;
  });
};

const Contact = () => {
  $(document).ready(function () {
    $(".subMen").on({
      mouseenter: function () {
        $(".contactContainer").css("opacity", "1");
        $(".contactContainer").css(
          "-webkit-box-shadow",
          " 11px 15px 19.5px 3.5px #00485c "
        );
        $(".contactContainer").css(
          "-moz-box-shadow",
          "11px 15px 19.5px 3.5px #00485c "
        );
        $(".contactContainer").css(
          "box-shadow",
          " 11px 15px 19.5px 3.5px #00485c "
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
              <h4 className="email">Email :</h4>
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
              <h4 className="mensaje">Message :</h4>
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
        <div class="dialogContainer  dialogMove" data-speed="8">
          <p className="dialog" >Please give me the flashlight</p>
        </div>
        <div className="picoDialog picoDialogMove" data-speed="8"></div>

        <div className="subMen moveMen1 " data-speed="8"></div>
      </div>
    </div>
  );
};

export default Contact;

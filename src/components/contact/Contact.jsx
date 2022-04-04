import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="contact col-3">
      <div className="contactContainer">
        <h2 >Contact</h2>
        <div class="mb-2">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <h4 >Email :</h4>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-2">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <h4 >Message :</h4>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;

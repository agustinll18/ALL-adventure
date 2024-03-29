import React from "react";

export default function Item(x) {
  return (
    <div class="col">
      <div class="wrapper">
        <div class="container">
          <div class="top"></div>
          <div class="bottom">
            <h1>{x.modelo}</h1>
          </div>
        </div>
        <div class="inside">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-info-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </div>
          <div class="contents">
            <table>
              <tr>
                <th>Code:</th>
              </tr>
              <tr>
                <td>{x.herramienta1}</td>
              </tr>
              <tr>
                <th>Processor:</th>
              </tr>
              <tr>
                <td>{x.herramienta2}</td>
              </tr>
              <tr>
                <th>Tools:</th>
              </tr>
              <tr>
                <td>{x.herramienta3}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [items, setItems] = useState();
  var producto = [
    {
      modelo: " FRONT END",
      descripcion: "Gigabyte",
      porcentaje:"75",
      id: 1,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/_RXYZIXH-removebg-preview.png",
      herramienta1:"ReactJs",
      herramienta2:"SCSS or CSS3 or SASS",
      herramienta3:"JavaScript",
    },
    {
      modelo: "UX / UI ",
      descripcion: "Western Digital Green",
      porcentaje:"30",
      id: 2,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE_-_copia-removebg-preview.png",
      herramienta1:"Figma",
      herramienta2:"Sketch",
      herramienta3:"AdobeXD",
    },
    {
      modelo:"BACK END",
      descripcion: "Amd",
      porcentaje:"40",
      id: 3,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE-removebg-preview%20(1).png",
      herramienta1:"Cli",
      herramienta2:"JavaScript",
      herramienta3:"MongoDBcompass",
    }
  ];

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => resolve(items), 2000);
  });
  getItem.then((resolve) => setItems(resolve));

  return (
    <div id="cardContainer"/*  className="reveal" */>
      <ItemList items={producto} />
    </div>
  );
}

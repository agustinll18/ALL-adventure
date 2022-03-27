import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [items, setItems] = useState();
  var producto = [
    {
      modelo: " BASIC",
      marca: "Gigabyte",
      precio: "hola",
      id: 1,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/_RXYZIXH-removebg-preview.png",
    },
    {
      modelo: "MEDIUM",
      marca: "Western Digital Green",
      precio: "chau",
      id: 2,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE_-_copia-removebg-preview.png",
    },
    {
      modelo:"COMPLETE",
      marca: "Amd",
      precio: "Front-end \
      API\
      Back-end",
      id: 3,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE-removebg-preview%20(1).png"
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

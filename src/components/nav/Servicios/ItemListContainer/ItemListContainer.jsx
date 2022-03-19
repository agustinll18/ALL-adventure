import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import base from"../Fotos/base.png";

export default function ItemListContainer() {
  const [items, setItems] = useState();
  var producto = [
    {
      modelo: " B550M-DS3H-rev-1x",
      marca: "Gigabyte",
      precio: "$10.000",
      id: 1,
      pic: "https://acortar.link/gaYY0u",
    },
    {
      modelo: "M.2 2280 240gb Western Digital Green",
      marca: "Western Digital Green",
      precio: "$5.000",
      id: 2,
      pic: "https://http2.mlstatic.com/D_NQ_NP_704704-MLA40381713328_012020-O.webp",
    },
    {
      modelo:"Rx-560",
      marca: "Amd",
      precio: "$10.000",
      id: 3,
      pic: {base}
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

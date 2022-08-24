/* import React, { useState } from "react"; *//* 
import ItemList from "../ItemList/ItemList"; */
import Item from "../Item/Item";

export default function ItemListContainer() {
  /* 
  const [items, setItems] = useState(); */
  var productos = [
    {
      modelo: " FRONT END",
      id: 1,
      herramienta1: "ReactJs,JavaScript, html or pug",
      herramienta2: "SCSS or CSS3 or SASS",
      herramienta3: "Bootstrap, materialUI ,tailwind",
    },/* 
    {
      modelo: "UX / UI ",
      descripcion: "Western Digital Green",
      porcentaje: "30",
      id: 2,
      pic: "https://lesser-dawns.000webhostapp.com/multimedia/recursos/PIRAMIDE_-_copia-removebg-preview.png",
      herramienta1: "Figma",
      herramienta2: "Sketch",
      herramienta3: "AdobeXD",
    }, */
    {
      modelo: "BACK END",
      id: 3,
      herramienta1: "Cli,heroku,insomnia",
      herramienta2: "NodeJS,Express,mongoose",
      herramienta3: "MongoDBcompass,Sentry",
    },
  ]; /* 

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => resolve(items), 2000);
  });
  getItem.then((resolve) => setItems(resolve));
 */
  return (
    <div className=" cards col-6" /* id="cardContainer" */ /*  className="reveal" */>
      <div className="row row-cols-1 row-cols-md-2 g-4">
          {productos.map((item) => (
            <Item
              modelo={item.modelo}
              precio={item.precio}
              marca={item.marca}
              id={item.id}
              pic={item.pic}
              stock={item.stock}
              herramienta1={item.herramienta1}
              herramienta2={item.herramienta2}
              herramienta3={item.herramienta3}
              porcentaje={item.porcentaje}
            />
          ))}
      </div>
    </div>
  );
}

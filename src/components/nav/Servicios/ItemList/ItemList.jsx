import React from "react";
import Item from "../Item/Item";

export default function ItemList({ items }) {
  return (
    <div /*  className="reveal"  */id="itemList">
      {items.map((item) => (
        <Item
          modelo={item.modelo}
          precio={item.precio}
          marca={item.marca}
          id={item.id}
          pic={item.pic}
          stock={item.stock}
        />
      ))}
    </div>
  );
}

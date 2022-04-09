import React from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.fish').forEach(fish => {
        const speed = fish.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        fish.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
export default function ContainerItemsGeneral() {
  return <ItemListContainer /* class="reveal" *//>;
  
}

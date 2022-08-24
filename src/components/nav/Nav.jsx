import React from "react";
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll("#moon").forEach((moon) => {
    const speed = moon.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    moon.style.transform = `translateX(${x}px) translateY(${y}px) `;
    moon.style.transform = `-o-translateX(${x}px) -o-translateY(${y}px)  `;
  });
};
const Nav = () => {
  var images = [,
    "https://agust1n-llad0s.000webhostapp.com/multimedia/recursosWebP/mountain-removebg.webp",
    "https://agust1n-llad0s.000webhostapp.com/multimedia/recursosWebP/road-removebg.webp",
    "https://agust1n-llad0s.000webhostapp.com/multimedia/recursosWebP/moon-removebg.webp",
  ];

  return (
    <div /* className="dark-theme" */>
      <main className="mainSection" /*  class="col-9" */>
        <div class="col-9">
          <h1 className="saludo" >Hi! I am Agustín LLadós</h1>
          <img src={images[1]} className="mountain" alt="mountain" />
          <img src={images[2]} className="road" alt="road" />
          <img src={images[3]} className="moon" id="moon" alt="moon" data-speed="10"/>
        </div>

        <aside class="col-3">
          <h2 id="navH">I am an Front end developer</h2>
          <p id="navP">
            I have 20 years, born in 2002, and I am a full-stack developer
            improving my back-end's knowledge. I like programming in the
            front-end area, use some libraries and get some challenges.
            My hobbies are: do sport, I love Tennis and Futbol, go out with my
            friends and eat with my family on Sunday.
            
          </p>
        </aside>
      </main>
    </div>
  );
};

export default Nav;

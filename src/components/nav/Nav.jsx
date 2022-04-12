import React from "react";
const Nav = () => {
  var images = [,
    "https://agust1n-llad0s.000webhostapp.com/multimedia/recursosWebP/mountain-removebg.webp",
    "https://agust1n-llad0s.000webhostapp.com/multimedia/recursosWebP/road-removebg.webp",
    "https://agust1n-llad0s.000webhostapp.com/multimedia/recursosWebP/moon-removebg.webp",
  ];

  return (
    <div /* className="dark-theme" */>
      <main id="mainSection" /*  class="col-9" */>
        <div class="col-9">
          <h1 className="saludo">Hi! I am Agustín LLadós</h1>
          <img src={images[1]} className="mountain" alt="moon" />
          <img src={images[2]} className="road" alt="road" />
          <img src={images[3]} className="mountain" alt="mountain" />
        </div>

        <aside class="col-3">
          <h2 id="navH">I am an Front end developer</h2>
          <p id="navP">
            I have 20 years, born in 2002, and I am a full-stack developer
            improving my back-end's knowledge. I like programming in the
            front-end area, use some libraries and get some challenges.
            My hobbies are: do sport, I love Tennis and Futbol, go out with my
            friends and eat with my family on Sunday.
            {/* I graduated from economic science in my school "Emaus" with an 7.66
            average in highschool and awarded for "the best friend in the
            class" , then I started to see what was i would like to dedicate in
            my professional career. First I looked up to be a AI developer but
            after I do a basic AI course based in the principles of AI , I wasnt
            completely sure. After do my research and see videos from people who
            work and they mastered in their area I decided that I want to became
            a fullstack developer. (hahah I didnt realized the AMOUNT OF HARD
            WORK I WILL HAVE TO DO). Meanwhile I was working in one company to
            get money and doing a course in Python and Front-end developer in
            Udemy ,I was looking a place to study and instruct me in the
            fullstack area afterwards I found CoderHouse that gives me all i was
            searching SO I STARTED MY STUDIES*/}
          </p>
        </aside>
      </main>
    </div>
  );
};

export default Nav;

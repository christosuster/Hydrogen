import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./home.css";
function Home() {
  let screenSize = window.innerWidth;
  window.addEventListener("resize", () => {
    screenSize = window.innerWidth;
  });

  const animateWork = () => {
    if (screenSize > 992) {
      document.getElementById("work").classList.add("wider-taller");
      document.getElementById("connect").classList.add("thinner-taller");
      document.getElementById("about").classList.add("wider-shorter");
      document.getElementById("community").classList.add("thinner-shorter");
      document.getElementById("logo").classList.add("logo-br");
    }
  };
  const unanimateWork = () => {
    if (screenSize > 992) {
      document.getElementById("work").classList.remove("wider-taller");
      document.getElementById("connect").classList.remove("thinner-taller");
      document.getElementById("about").classList.remove("wider-shorter");
      document.getElementById("community").classList.remove("thinner-shorter");
      document.getElementById("logo").classList.remove("logo-br");
    }
  };

  const animateConnect = () => {
    if (screenSize > 992) {
      document.getElementById("work").classList.add("thinner-taller-vertical");
      document.getElementById("connect").classList.add("wider-taller-vertical");
      document
        .getElementById("about")
        .classList.add("thinner-shorter-vertical");
      document
        .getElementById("community")
        .classList.add("wider-shorter-vertical");
      document.getElementById("logo").classList.add("logo-bl");
    }
  };
  const unanimateConnect = () => {
    if (screenSize > 992) {
      document
        .getElementById("work")
        .classList.remove("thinner-taller-vertical");
      document
        .getElementById("connect")
        .classList.remove("wider-taller-vertical");
      document
        .getElementById("about")
        .classList.remove("thinner-shorter-vertical");
      document
        .getElementById("community")
        .classList.remove("wider-shorter-vertical");
      document.getElementById("logo").classList.remove("logo-bl");
    }
  };

  const animateAbout = () => {
    if (screenSize > 992) {
      document.getElementById("work").classList.add("wider-shorter-vertical");
      document
        .getElementById("connect")
        .classList.add("thinner-shorter-vertical");
      document.getElementById("about").classList.add("wider-taller-vertical");
      document
        .getElementById("community")
        .classList.add("thinner-taller-vertical");
      document.getElementById("logo").classList.add("logo-tr");
    }
  };
  const unanimateAbout = () => {
    if (screenSize > 992) {
      document
        .getElementById("work")
        .classList.remove("wider-shorter-vertical");
      document
        .getElementById("connect")
        .classList.remove("thinner-shorter-vertical");
      document
        .getElementById("about")
        .classList.remove("wider-taller-vertical");
      document
        .getElementById("community")
        .classList.remove("thinner-taller-vertical");
      document.getElementById("logo").classList.remove("logo-tr");
    }
  };

  const animateCommunity = () => {
    if (screenSize > 992) {
      document.getElementById("work").classList.add("thinner-shorter");
      document.getElementById("connect").classList.add("wider-shorter");
      document.getElementById("about").classList.add("thinner-taller");
      document.getElementById("community").classList.add("wider-taller");
      document.getElementById("logo").classList.add("logo-tl");
    }
  };
  const unanimateCommunity = () => {
    if (screenSize > 992) {
      document.getElementById("work").classList.remove("thinner-shorter");
      document.getElementById("connect").classList.remove("wider-shorter");
      document.getElementById("about").classList.remove("thinner-taller");
      document.getElementById("community").classList.remove("wider-taller");
      document.getElementById("logo").classList.remove("logo-tl");
    }
  };

  const animateLogo = () => {
    if (screenSize > 992) {
      document.getElementById("work").classList.add("thinner-taller");
      document
        .getElementById("connect")
        .classList.add("wider-shorter-vertical");
      document.getElementById("about").classList.add("wider-shorter-vertical");
      document.getElementById("community").classList.add("thinner-taller");
      document.getElementById("logo").classList.add("logo-big");
    }
  };
  const unanimateLogo = () => {
    if (screenSize > 992) {
      document.getElementById("work").classList.remove("thinner-taller");
      document
        .getElementById("connect")
        .classList.remove("wider-shorter-vertical");
      document
        .getElementById("about")
        .classList.remove("wider-shorter-vertical");
      document.getElementById("community").classList.remove("thinner-taller");
      document.getElementById("logo").classList.remove("logo-big");
    }
  };

  return (
    <m.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/work">
        <m.div
          className="work tile tile-wide"
          id="work"
          onMouseOver={animateWork}
          onMouseLeave={unanimateWork}
        >
          <h1>WORK</h1>
        </m.div>
      </Link>

      <Link to="/connect">
        <div
          className="connect tile tile-long "
          id="connect"
          onMouseOver={animateConnect}
          onMouseLeave={unanimateConnect}
        >
          <h1>CONNECT</h1>
        </div>
      </Link>
      <Link to="/about">
        <div
          className="about tile tile-long"
          id="about"
          onMouseOver={animateAbout}
          onMouseLeave={unanimateAbout}
        >
          <h1>ABOUT</h1>
        </div>
      </Link>
      <Link to="/community">
        <div
          className="community tile tile-wide"
          id="community"
          onMouseOver={animateCommunity}
          onMouseLeave={unanimateCommunity}
        >
          <h1>COMMUNITY</h1>
        </div>
      </Link>
      <div
        className="logo tile"
        id="logo"
        onMouseOver={animateLogo}
        onMouseLeave={unanimateLogo}
      >
        <div className="logoContainer">
          <h6>PROJECT</h6>
          <h1 className="mainLogo">HYDROGEN</h1>
          <h6>By Christos Uster Biswas</h6>
        </div>
      </div>
    </m.div>
  );
}

export default Home;

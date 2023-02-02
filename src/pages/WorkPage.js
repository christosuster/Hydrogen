import { useEffect, useState } from "react";
import Back from "./Back";
import "./WorkPage.css";
import { motion as m } from "framer-motion";
import pix from "../images/work1.jpg";
import pix2 from "../images/work2.png";
import pix3 from "../images/work3.jpg";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
function WorkPage() {
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );
  let screenSize = document.documentElement.clientWidth;

  useEffect(() => {
    console.log(document.documentElement.clientWidth);
    const handleWindowResize = () => {
      setWindowWidth(document.documentElement.clientWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const clickLeft = () => {
    document.getElementById("works").scrollBy(-windowWidth, 0);
  };
  const clickRight = () => {
    document.getElementById("works").scrollBy(windowWidth, 0);
  };
  return (
    <m.div
      className="WorkPage"
      initial={{
        height: screenSize > 992 ? "45vh" : "20vh",
        width: screenSize > 992 ? "75vw" : "100vw",
        top: screenSize > 992 ? "0" : "80vh",
      }}
      animate={{
        height: "100vh",
        width: "100%",
        top: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <m.div
        className="workContents"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1.5, ease: "anticipate" }}
      >
        <Back />
        <div className="work-title">
          <h1>Work Done</h1>
        </div>

        <div className="buttons">
          <button onClick={clickLeft}>
            <ArrowLeft width={"30px"} />
          </button>
          <button onClick={clickRight}>
            <ArrowRight width={"30px"} />
          </button>
        </div>

        <div className="works" id="works">
          <div className="work-item">
            <div className="work-left">
              <img src={pix} alt="" />
            </div>
            <div className="work-right ">
              <h2>Infokiosk</h2>
              <h3>
                An interactive network of information centers that is available
                to every citizen, resident or tourist of the city. Through
                interaction with the screen, the guest has access to reference
                information, product catalogs of stores, and also views a
                demonstration of commercials and presentations.
              </h3>
              <p>
                In this project, our creative team started to do the issue of
                simple stylish design, intuitive interface and usability of the
                application with the brand book of Khmelnytskyi. Only after
                that, we began to implement solutions that will allow us to work
                with the system smoothly, quickly and comfortably.
              </p>
            </div>
          </div>

          <div className="work-item">
            <div className="work-left ">
              <img src={pix2} alt="" />
            </div>
            <div className="work-right">
              <h2>Spyderbat</h2>
              <h3>
                Computer and network security company, detects runtime attacks
                across Linux. Website development was in cooperation with
                digital solution agency “Nextpage”.
              </h3>
              <p>
                This website has a feature in its hosting, we chose the solution
                from “Strattic”. This hosting platform instantly optimizes
                WordPress by converting it to a static architecture. It is a
                headless solution that forms static pages, separating them from
                WordPress, which is super secure. The category of products has
                three pages with flexible secure plans. Category of solutions
                has three pages with services as well and pages with Spyderbats
                cases which also offer methods how to detect attacks on OC and
                protect against these attacks. Users can start and try the
                products by logging in or signing in to a personal account.
              </p>
            </div>
          </div>

          <div className="work-item">
            <div className="work-left ">
              <img src={pix3} alt="" />
            </div>
            <div className="work-right">
              <h2>Eurotrader</h2>
              <h3>
                The brand embodies the Mediterranean vision of comfort with the
                help of its products: household appliances and mobile air
                conditioners. “Eurotrader” is a young brand from the German
                manufacturer “SUNTEC Wellness”, which sets trends and has strong
                values of vision of home comfort.
              </h3>
              <p>
                The theme we've chosen for this online store fits well with its
                e-commerce industry and has enough styling options for page
                customization. These theme helps get started fast. In addition,
                it has all Shopify's Plus new features. F.e. , we did a layout
                of the catalog page according to a layout trend for navigational
                elements.
              </p>

              <p>
                With the help of the Shopify theme, we created a new e-commerce
                member. But to reflect the values of this business, we adjusted
                the custom settings and custom blocks. So it's far better to
                find a Shopify Plus development agency like Web-Systems
                Solutions, that not only customizes pre-made theme, but also
                keeps abreast of new trends in web development, design, and
                usability.
              </p>
            </div>
          </div>
        </div>
      </m.div>
    </m.div>
  );
}

export default WorkPage;

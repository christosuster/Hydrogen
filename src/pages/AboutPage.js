import "./AboutPage.css";
import { motion as m } from "framer-motion";
import Back from "./Back";
import {
  Broadcast,
  Bullseye,
  CameraVideo,
  CloudSnowFill,
  CodeSlash,
  Eye,
  Globe,
  Grid,
  Lightbulb,
} from "react-bootstrap-icons";
import { useState } from "react";
function AboutPage() {
  const [height, setHeight] = useState("100");
  let screenSize = window.innerWidth;

  const showInfo = (e) => {
    let info = e.target.parentNode.querySelector(".info");

    if (info.style.top === "100%") {
      info.style.top = "0px";
    } else {
      info.style.top = "100%";
    }
  };
  return (
    <m.div
      className="AboutPage"
      id="AboutPage"
      initial={{
        height: screenSize > 992 ? "75vh" : "20vh",
        width: screenSize > 992 ? "45vw" : "100vw",
        bottom: screenSize > 992 ? "0" : "50vh",
        left: screenSize > 992 ? "0" : "0",
        position: "absolute",
      }}
      animate={{
        height: "100%",
        width: "100%",
        left: 0,
        bottom: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <m.div
        className="contents"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1.5, ease: "anticipate" }}
      >
        <Back />
        <h1 className="title">WHO WE ARE</h1>
        <div className="row header text-start">
          <div className="col-12 col-md-12 col-lg-6 px-5 about-text">
            <p>
              We're an award-winning, purpose-driven, creative agency
              specializing in strategy, content creation, and social media. Our
              mission is to leverage the power of technology, art, and culture
              to create a more connected, engaging, and just world.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-5 services">
            <div className="service">
              <Eye />
              <li>Branding</li>
            </div>
            <div className="service">
              <Lightbulb />
              <li>Content Creative</li>
            </div>
            <div className="service">
              <Bullseye />
              <li>Creative & Comms Strategy</li>
            </div>
            <div className="service">
              <Broadcast />
              <li>Influencer Marketing</li>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-5 services">
            <div className="service">
              <Grid />
              <li>Integrated Campaigns</li>
            </div>
            <div className="service">
              <Globe />
              <li>Social Media</li>
            </div>
            <div className="service">
              <CameraVideo />
              <li>Video Production</li>
            </div>
            <div className="service">
              <CodeSlash />
              <li>Web Design</li>
            </div>
          </div>
        </div>

        <div className="team row">
          <div className="member col-12 col-md-6  col-lg-4 col-xl-3 px-2">
            <div className="photoContainer" onClick={showInfo}>
              <img
                src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
                alt=""
              />
              <div className="info" style={{ top: "100%" }}>
                <p>
                  Kyle is a designer, developer, visual artist, and technology
                  enthusiast currently living in San Francisco. Kyle started RCO
                  after 10 years of working in-house at companies like Dropbox,
                  Airtable, and Evernote. RCO is the culmination of those skills
                  and experiences as an interactive designer, front-end
                  engineer, growth engineer, and team lead.
                </p>
              </div>
            </div>

            <h3>Kyle Ribant</h3>
            <p className="position">Founder</p>
          </div>
          <div className="member col-12 col-md-6  col-lg-4 col-xl-3 px-2">
            <div className="photoContainer" onClick={showInfo}>
              <img
                src="https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136__340.jpg"
                alt=""
              />
              <div className="info" style={{ top: "100%" }}>
                <p>
                  Colby is an experienced Art Director and Graphic Designer with
                  nearly 10 years of experience in the industry. He's honed his
                  branding, logo design, illustration and typography skills
                  working with clients from photographers, non-profit
                  organizations, higher education, and everything in between.
                </p>
              </div>
            </div>

            <h3>Colby Wang</h3>
            <p className="position">Graphic Designer</p>
          </div>
          <div className="member col-12 col-md-6 col-lg-4 col-xl-3 px-2">
            <div className="photoContainer" onClick={showInfo}>
              <img
                src="https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?w=2000"
                alt=""
              />
              <div className="info" style={{ top: "100%" }}>
                <p>
                  Allie has been working in the photography industry for over 8
                  years, honing her vision and her skills as both a
                  photographer/photographer's assistant for clients in the
                  hospitality, architecture, and education industry.
                </p>
              </div>
            </div>

            <h3>Allie Jane</h3>
            <p className="position">Creative Director</p>
          </div>
          <div className="member col-12 col-md-6 col-lg-4 col-xl-3 px-2">
            <div className="photoContainer" onClick={showInfo}>
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-smiling-african-man-looking_171337-9852.jpg?w=360"
                alt=""
              />
              <div className="info" style={{ top: "100%" }}>
                <p>
                  Jason is our resident marketing and research specialist and an
                  integral part of the work that's done behind the scenes at
                  Philly Reps. Whether building a list, researching client
                  prospects, digging through databases, or making agency calls
                  on behalf of our photographers, her role is the backbone of
                  our brand.
                </p>
              </div>
            </div>

            <h3>Jason Spence</h3>
            <p className="position">Marketing + Research</p>
          </div>
        </div>
      </m.div>
    </m.div>
  );
}

export default AboutPage;

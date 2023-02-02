import React from "react";
import "./CommunityPage.css";
import { motion as m } from "framer-motion";
import logo1 from "../images/logo1.svg";
import logo2 from "../images/logo2.svg";
import logo3 from "../images/logo3.svg";
import logo4 from "../images/logo4.svg";
import { ArrowRight } from "react-bootstrap-icons";
import Back from "./Back";

function CommunityPage() {
  let screenSize = window.innerWidth;

  return (
    <m.div
      className="CommunityPage"
      initial={{
        height: screenSize > 992 ? "45vh" : "20vh",
        width: screenSize > 992 ? "75vw" : "100vw",
        bottom: screenSize > 992 ? "0" : "80vh",
        right: 0,
        position: "absolute",
        overflowX: "hidden",
      }}
      animate={{
        height: "100%",
        width: "100%",
        bottom: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <m.div
        className="communityContent"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1.5, ease: "anticipate" }}
      >
        <Back />
        <div className="communityHeader">
          <h1>COMMUNITY</h1>
          <p>
            Truth be told, the world doesn't really need another agency. But it
            could always use a great place to work, collaborate, and make a
            positive impact. As strategists and creatives we see the value of
            our skillset going much further than the next campaign or piece of
            content. Our commitment to creating a diverse, equitable, and
            progressive world starts with ourselves, the organizations we
            support, the people we collaborate with and the ultimately the work
            we do. Check back here often to see what we've been up to and the
            friends/partnerships we've made along the way!
          </p>
        </div>

        <div className="communitySection">
          <div className="row">
            <div className="sectionContainer col-12 col-md-6">
              <div className="sectionContainerLeft">
                <img src={logo1} alt="" />
              </div>
              <div className="sectionContainerRight">
                <h3>Mad Potential</h3>
                <p>
                  Our commitment to diversity, equity, inclusion and radical
                  change in the advertising and creative industries goes beyond
                  just hashtags and statistics. We've been working with civic
                  leaders, captains of industry, and national organizations to
                  develop strategies, curriculum, and movements focused on
                  empowering marginalized youth to enter the creative workforce.
                  Learn more at our sister organization Mad Potential.
                </p>
              </div>
            </div>
            <div className="sectionContainer col-12 col-md-6">
              <div className="sectionContainerLeft">
                <img src={logo2} alt="" />
              </div>
              <div className="sectionContainerRight">
                <h3>MAIP / CCWD</h3>
                <p>
                  We are participating members of both the 4A Foundation's MAIP
                  (Multicultural Advertising Internship Program) and the
                  Creative & Cultural Workforce Development program created by
                  the City of Seattle and Northwest Folklife. We're committed to
                  engaging directly with BIPOC youth and providing internship
                  opportunities and more.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="sectionContainer col-12 col-md-6">
              <div className="sectionContainerLeft">
                <img src={logo3} alt="" />
              </div>
              <div className="sectionContainerRight">
                <h3>Radical Communicators Network</h3>
                <p>
                  We're a proud member of the Radical Communicators Network aka
                  #RadComms. RadComms is the grassroots, BIPOC-led, go-to-hub
                  for cutting-edge skill-building, values-aligned political
                  education, and cross-movement collaboration for social-change
                  communicators.
                </p>
              </div>
            </div>
            <div className="sectionContainer col-12 col-md-6">
              <div className="sectionContainerLeft">
                <img src={logo4} alt="" />
              </div>
              <div className="sectionContainerRight">
                <h3>OMWBE Certified</h3>
                <p>
                  We are certified by the Office of Minority & Women’s Business
                  Enterprise as a minority owned business. Our vision is to
                  continue leading our industry and community as a diverse and
                  inclusive organization.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="blogs row">
          <div className="blog col-12 col-lg-6">
            <h3>Emerging Radiance Wins Tribeca X Award</h3>
            <p>
              Emerging Radiance: Honoring the Nikkei Farmers of Bellevue, WA has
              won the Tribeca X Award for best Immersive project! The Tribeca X
              Awards celebrate the achievement of best-in-class creators and
              companies who share a love of creativity and a mission to connect
              with consumers through the power of storytelling.
            </p>
            <p>
              In the award announcement Emerging Radiance was celebrated for how
              it combines art and AR, the physical and the digital, to bring
              history to the present and connect generations. Emerging Radiance
              animates the stories of Rae Matsuoka Takekawa, Mitsuko Hashiguchi
              and Toshio Ito, three Japanese American farmers who were part of a
              thriving community of Japanese Americans that were forcibly
              removed from their land in Bellevue, WA during the second World
              War. This award honors their legacy and is a testament to over a
              year of collective work by artist Michelle Kumata (
              <a href="#">@michellekumata</a>) and filmmaker Tani Ikeda (
              <a href="#">@taniikeda</a>) with Meta Open Arts and the support of
              local community members. Milli's role was to build an immersive
              web experience that best reflected the AR/physical experience of
              the exhibit. We're honored to have been a part of this amazing
              team.
            </p>
            <a href="#">
              SEE THE PROJECT <ArrowRight />{" "}
            </a>
          </div>

          <div className="blog col-12 col-lg-6">
            <h3>WE WON OUR FIRST ADDY</h3>
            <h4>We won an ADDY!</h4>
            <p>
              But not just any ADDY. It's our first one. And it's also our first
              time entering. The win is for a project very near and dear to our
              hearts: A film series as a love letter to the Seattle creative
              community and to the next generation of creators. With everything
              going on - including violence towards Asian Americans and
              Black/Brown folx - we recognize that it's more important than ever
              to tell their stories - our stories. Thank you AAF Seattle and the
              ADDY's for recognizing them!
              <a href="#">VIDEO</a>
            </p>
            <a href="#">
              SEE THE PROJECT <ArrowRight />{" "}
            </a>
          </div>
        </div>
      </m.div>
    </m.div>
  );
}
export default CommunityPage;

import React from "react";
import "./ConnectPage.css";
import { motion as m } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import Back from "./Back.js";

function ConnectPage() {
  var iconSize = "min(80px,9vw";
  let screenSize = window.innerWidth;

  return (
    <m.div
      className="ConnectPage"
      initial={{
        height: screenSize > 992 ? "75vh" : "20vh",
        width: screenSize > 992 ? "45vw" : "100vw",
        top: screenSize > 992 ? "0" : "50vh",
        right: screenSize > 992 ? "0" : "0",
        position: "absolute",
      }}
      animate={{
        minHeight: "100%",
        height: "auto",
        width: "100%",
        top: screenSize > 992 ? "0" : "0",
      }}
      transition={{ duration: 0.5 }}
    >
      <m.div
        className="connectContent row"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1.5, ease: "anticipate" }}
      >
        <Back />
        <div className="formSection col-12 col-lg-8">
          <h1 className="formTitle">Send us a message</h1>
          <div className="formGroup">
            <label>Your Name</label>
            <input type="text" className="formControl" />
          </div>
          <div className="formGroup">
            <label>Your Email</label>
            <input type="email" className="formControl" />
          </div>
          <div className="formGroup">
            <label>Your Message</label>
            <textarea className="formControl" id="" rows="10"></textarea>
          </div>
          <button className="formBtn">SUBMIT</button>
        </div>
        <div className="socialSection col-12 col-lg-4">
          <div className="socialIcons">
            <div className="row">
              <a href="#" className="col-3 icon">
                <Instagram size={iconSize} />
              </a>
              <a href="#" className="col-3 icon">
                <Facebook size={iconSize} />
              </a>
            </div>
            <div className="row">
              <a href="#" className="col-3 icon">
                <Twitter size={iconSize} />
              </a>
              <a href="#" className="col-3 icon">
                <Linkedin size={iconSize} />
              </a>
            </div>
          </div>
          <div className="footer">
            <h6>Developed by Christos Uster Biswas</h6>
          </div>
        </div>
      </m.div>
    </m.div>
  );
}

export default ConnectPage;

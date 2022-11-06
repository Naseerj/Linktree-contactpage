import React from "react";
import "./Footer.css";
import Zuri from "./Img/Zuri.Internship_Logo.svg";
import HNG from "./Img/I4G.png";
import Slack from "./Img/slack.svg";
import Git from "./Img/Icon.svg";

const Footer = () => {
  return (
    <div>
      

      <div>
        <hr className="hr_" />
        <footer className="footer1_">
          <img id="zuri_" src={Zuri} alt="" />
          <p className="ptag_">HNG Internship 9 Frontend Task</p>
          <div className="redd_">
            <img id="hng_" src={HNG} alt="" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

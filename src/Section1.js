import React from "react";
import "./Section1.css";
import Anette from "./Img/profile__img (1).svg";
import Slack from "./Img/slack.svg";
import Git from "./Img/Icon.svg";
import { Link } from "react-router-dom";
import Zuri from './Img/Zuri.Internship_Logo.svg'
import HNG from './Img/I4G.png'
import Naseer from './Img/Naseer2.jpg'
import Avatar from './Img/_Avatar share button.svg'

const Section1 = () => {
  return (
    <div className="section1">
      <img className="avatar" src={Avatar} alt="" />
      <div className="anettediv">
        <img id="profile__img" src={Naseer} alt="" />
        <p id="twitter">Naseer Olasupo</p>
        {/* <p id="slack">Naseer</p> */}
      </div>
      <div className="firstdiv">
        <div className="header1div"> 
        <a id="btn__zuri" href="https://twitter.com/JenrolaOlasupo"><h4 className="header1">Twitter Link</h4></a>
        </div>
      </div>
      <div className="secondiv">
        <div className="header2div">
        <a id="btn__zuri" href="https://books.zuri.team/"><h4 className="header2">Zuri Team</h4></a>

        </div>
      </div>
      <div className="thirdiv">
        <div className="header3div">
        <a id="books" href=" http://books.zuri.team"><h4 className="header3">Zuri Books</h4></a>
        {/* ZURI BOOKS
        THIS IS WHERE YOU FIND BOOKS ABOUT DESIGN AND CODING */}
        </div>
      </div>
      <div className="fourthdiv">
       <div className="header4div">
      <a id="python__books" href="https://books.zuri.team/python-for-beginners?ref_id=<Naseer>"> <h4 className="header4">Python Books</h4></a>
      {/* The zuri python book provides wide range of topics and detailed examples for all categories of programmers  */}
       </div>
      </div>
      <div className="fifthdiv">
        <div className="header5div">
       <a id="pitch" href="https://background.zuri.team " > <h4 className="header5">Background Check for Coders</h4></a>
       {/* The zuri team does regular background check on their coders to ensure they have the best on the job 
       This is conducted through checking of github repositories */}
        </div>
      </div>
    
      <div className="sixthdiv">
        <div className="header6div">
        <a  className="book__design" href="https://books.zuri.team/design-rules"><h4 className="header6">Design Books</h4></a>
        {/* Zuri offers free design books for both newbie designers and senior designers */}
        </div>
      </div>

      <div className="seventhdiv">
        <div className="header7div">
      <Link className="link" to='/contact'> <a id="contact" href="" target='__blank'><h4 className="header7">Contact Me</h4></a></Link>
        </div>
      </div>
      
      <div className="icondiv">
        <div className="flexdiv">
        <img src={Slack} alt="" />
        <a  href="https://github.com/Naseerj"><img src={Git} alt="" /></a>
        </div>
      </div>



    <div>
        <hr  className="hr"/>
      <footer className="footer1">
      <img id="zuri" src={Zuri} alt="" />
      <p className="ptag">HNG Internship 9 Frontend Task</p>
      <div className="redd">
      <img id="hng" src={HNG} alt="" />
      </div>
    </footer>
    </div>
    </div>
  );
};

export default Section1;

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactpage">
      <div className="contactpage">
          <div className="textdiv">
            <div className="ogadiv">
              <div className="textt">
                <h1 className="header1">Contact Me</h1>
              </div>
              <div className="textt">
                <p className="firstp">
                  {" "}
                  Hi there, contact me to ask me about anything you have in
                  mind.
                </p>
              </div>
            </div>
          </div>
          <form className="form" action="">
            <div className="firstdiv">
              <div className="label1div">
                <label className="label1" htmlFor="">
                  First name
                </label>
              </div>
              <input
                id="first_name"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="secondiv">
              <div className="label2div">
                <label htmlFor="">Last name</label>
              </div>
              <input
                id="last_name"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <div className="thirdiv">
                <div className="label2div">
                  <label htmlFor="">Email</label>
                </div>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="txtadiv">
              <div className="txtlabeldiv">
                <label className="txtlabel" htmlFor="">
                  Message
                </label>
              </div>
              <textarea name="" id="" cols="60" rows="10" ></textarea>
            </div>

            <div className="yy">
            <div className="check">
            <input className="rr" type="checkbox" /> You agree to providing your data to  who may contact you.
            </div>
            </div>
            <button className="btn1">Send message</button>
          </form>
        
      </div>
    </div>
  );
};

export default Contact;

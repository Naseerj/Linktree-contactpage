import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactpage">
      <div className="contactpage">
       <div className="ccc">
       <div className="textdiv">
       <div className="ogadiv">
       <div className="textt">
       <h1 className="header1">Contact Me</h1>
       </div>
        <div className="textt">
        <p className="firstp"> Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
       </div>
       </div>
        <form className="form" action="">
          <div className="firstdiv">
            <div className="label1div">
              <label className="label1" htmlFor="">First name</label>
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
          <div className="secondiv">
            <div className="label2div">
            <label htmlFor="">Email</label>
            </div>
            <input 
              id="email"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
           
        </form>
       </div>
      </div>
    </div>
  );
};

export default Contact;

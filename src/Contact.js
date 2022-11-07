import React from "react";
import "./Contact.css";
import zuri from './Img/Zuri.Internship_Logo.png';
import ingress from "./Img/I4G (1).png";
import { useState } from "react";

const Contact = () => {
  const name = "wale";
  const [emaiil, setEmaiil] = useState("");
  const [message, setMessage] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (message == "" || emaiil == "" || first == "" || last == "") {
      setError(true);
    }
  }
  return (
    <div className="Contact_Contact">
      <div className="Contact_Contacts">
        <h1 className="contactMe">Contact Me</h1>
        <p className="contactPa">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="llabel">
            <div className="llabel1">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className={
                  error && first == "" ? "first_name" : "first_name-NX"
                }
                onChange={(e) => setFirst(e.target.value)}
                id="first_name"
              />
            </div>
            <div className="llabel1">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className={error && last == "" ? "last_name" : "last_name-NX"}
                onChange={(e) => setLast(e.target.value)}
                id="last_name"
              />
            </div>
          </div>
          <div className="llabel2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="yourname@email.com"
              id="email"
              onChange={(e) => setEmaiil(e.target.value)}
            />
          </div>
          <div className="llabel3">
            <h2 className="mess">Message</h2>
            <textarea
              name=""
              id="message"
              cols="40"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="send me a message and i'll reply as soon as possible..."
            ></textarea>
            {error && message == "" ? (
              <label className="lab">please enter a message</label>
            ) : (
              ""
            )}
          </div>
          <div className="check">
            <input type="checkbox" id="checkbox" />
            <p>
              You agree to providing your data to {name} who may contact you.
            </p>
          </div>
          <button id="submit_btn">Send Message</button>
        </form>
      </div>
      <hr className="line" />
      <footer className="foot">
        <img src={zuri} alt="" className="zurri" />
        <h2 className="internn"> HNG Internship 9 Frontend Task</h2>
        <img src={ingress} alt="" className="ingresss" />
      </footer>
    </div>
  );
};

export default Contact;



















































// import React from "react";
// import "./Contact.css";
// import Footer from './Footer'


// const Contact = () => {
//   return (
//     <div className="contactpage">
//       <div className="contactpage">
//           <div className="textdiv">
//             <div className="ogadiv">
//               <div className="textt">
//                 <h1 className="header1_">Contact Me</h1>
//               </div>
//               <div className="textt">
//                 <p className="firstp">
                  
//                   Hi there, contact me to ask me about anything you have in
//                   mind.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <form className="form" action="">
//             <div className="firstdiv_">
//               <div className="label1div">
//                 <label className="label1" htmlFor="">
//                   First name
//                 </label>
//               </div>
//               <input
//                 id="first_name"
//                 type="text"
//                 placeholder="Enter your first name"
//               />
//             </div>
//             <div className="secondiv_">
//               <div className="label2div">
//                 <label className="label2" htmlFor="">Last name</label>
//               </div>
//               <input
//                 id="last_name"
//                 type="text"
//                 placeholder="Enter your last name"
//               />
//             </div>
//             <div>
//               <div className="thirdiv_">
//                 <div className="label2div">
//                   <label className="label3" htmlFor="">Email</label>
//                 </div>
//                 <input
//                   id="email"
//                   type="text"
//                   placeholder="Enter your last name"
//                 />
//               </div>
//             </div>
//             <div className="txtadiv">
//               <div className="txtlabeldiv">
//                 <label className="txtlabel" htmlFor="">
//                   Message
//                 </label>
//               </div>
//               <textarea name="" id="" cols="60" rows="10"  placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
//             </div>

//             <div className="yy">
//             <div className="check">
//             <input className="rr" type="checkbox" /> You agree to providing your data to  who may contact you.
//             </div>
//             </div>
//             <button className="btn1">Send message</button>
//           </form>
//          < Footer />
//       </div>
//     </div>
//   );
// };

// export default Contact;

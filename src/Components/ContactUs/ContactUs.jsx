import React, { useState } from "react";
import "./contactus.css";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [msg, setMsg] = useState("");
  const [standard, setStandard] = useState("6"); // Default standard value

  const [formDisplay, setFormDisplay] = useState(true);

  const changeHandler = (e) => {
    const { value } = e.target;
    if (e.target.name === "floating_name") setName(value);
    if (e.target.name === "floating_email") setEmail(value);
    if (e.target.name === "floating_phone") setMobile(value);
    if (e.target.name === "floating_msg") setMsg(value);
    if (e.target.name === "standard") setStandard(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, mobile, standard, msg);
    setFormDisplay(false);
  };

  const handleVisibility = (formVisibility) => setFormDisplay(formVisibility);

  return (
    <>
      <div class="container">
        <div class="form-container">
          <div class="right-container">
            <div class="right-inner-container">
              <form action="#">
                <h2 class="lg-view">Contact Us</h2>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <input type="text" placeholder="Name *" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Company" />
                <input type="phone" placeholder="Phone" />
                <textarea rows="4" placeholder="Message"></textarea>
                <button className="submit-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

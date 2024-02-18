import React, { useState } from "react";
import SuccessAlertCard from "../Alerts/SuccessAlertCard";
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
      {!formDisplay && (
        <div className="mt-5">
          <SuccessAlertCard onChangeVisibility={handleVisibility}>
            Message sent successfully! we will reply you soon. 👍
          </SuccessAlertCard>
        </div>
      )}
      <div className="container mx-auto py-12">
        {formDisplay && (
          <form className="mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <div className="">
              <div>
                <label htmlFor="floating_name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="John Doe"
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="floating_email" className="block mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="john@example.com"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="floating_phone" className="block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                pattern="[0-9]{5} [0-9]{5}"
                name="floating_phone"
                id="floating_phone"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="12345 67890"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="standard" className="block mb-1">
                Standard
              </label>
              <select
                name="standard"
                id="standard"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={changeHandler}
                value={standard}
                required
              >
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="floating_msg" className="block mb-1">
                Message
              </label>
              <textarea
                name="floating_msg"
                id="floating_msg"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your message..."
                onChange={changeHandler}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ContactUs;

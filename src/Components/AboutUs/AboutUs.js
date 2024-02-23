import React from "react";
import "./aboutus.css";
import Teachers from "./Teachers";
import TeachersContainer from "./TeachersContainer";
import TestimonialCarosuel from "../Testimonials/TestimonialCarosuel";
import AccrodionContainer from "./Accordion";

const AboutUs = () => {
  return (
    <div>
      <div>
        <p className="aboutus-heading">AboutUs</p>
      </div>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
        <p className="our-mission-heading">Our Misson</p>
        <p className="our-mission-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem
          possimus eius magnam minus molestiae voluptates. Voluptatum excepturi
          nam ipsam repellendus laboriosam, officia illo ratione! Porro
          necessitatibus nam adipisci excepturi Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sequi magnam iste reiciendis nesciunt
          optio, blanditiis ad ullam! Quia corporis aut, quod recusandae
          possimus dolor, beatae sapiente cupiditate sequi eaque quas ut sed
          similique ea..
        </p>
      </div>
      <div
        className="owners-block"
        style={{
          marginTop: "5rem",
        }}
      >
        <div className="slogan">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            numquam.
          </p>
        </div>
        <div className="owners-banner">
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            className="owners-img"
            src={require("../../assets/owner-banner.jpg")}
            alt="Owners"
          />
        </div>
      </div>

      <TeachersContainer />
      <div>
        <p className="aboutus-heading">Testimonials</p>
      </div>
      <TestimonialCarosuel products={[{}, {}, {}, {}, {}, {}, {}, {}]} />

      <AccrodionContainer />
    </div>
  );
};

export default AboutUs;

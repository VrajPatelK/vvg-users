import React, { useState, useEffect } from "react";
import { MovingComponent } from "react-moving-text";

import "./slide.css";
const Slide = ({ heading, description, image, index }) => {
  return (
    <div
      className={`slideshow mt-3 rounded`}
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 offset-md-6 animate slideshow-content"
            style={{ maxWidth: "800px" }}
          >
            <MovingComponent
              type="fadeInFromLeft"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <h1 style={{ fontSize: "38px" }}>{heading}</h1>
            </MovingComponent>

            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;

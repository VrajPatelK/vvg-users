import React from "react";
import CountUp from "react-countup";
import "./countup.css";

const CountersContainer = () => {
  return (
    <div class="container" style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div class="row counter-container">
        <div class="col-md-3 col-sm-6">
          {/* Experience */}
          <div class="counter green">
            <div class="counter-content">
              <div class="counter-icon">
                <i class="fa fa-globe"></i>
              </div>
              <h3>Experience</h3>
              <span class="counter-value">
                <CountUp start={0} end={100} duration={2.5} />+ Years
              </span>
            </div>
          </div>
        </div>
        {/* Clients */}
        <div class="col-md-3 col-sm-6">
          <div class="counter orange">
            <div class="counter-content">
              <div class="counter-icon">
                <i class="fa fa-rocket"></i>
              </div>
              <h3>Clients</h3>
              <span class="counter-value">
                <CountUp start={0} end={200} duration={2.5} />+
              </span>
            </div>
          </div>
        </div>
        {/* Branches */}
        <div class="col-md-3 col-sm-6">
          <div class="counter purple">
            <div class="counter-content">
              <div class="counter-icon">
                <i class="fa fa-globe"></i>
              </div>
              <h3>Branches</h3>
              <span class="counter-value">
                <CountUp start={0} end={10} duration={2.5} />
              </span>
            </div>
          </div>
        </div>
        {/* Teachers */}
        <div class="col-md-3 col-sm-6">
          <div class="counter blue">
            <div class="counter-content">
              <div class="counter-icon">
                <i class="fa fa-rocket"></i>
              </div>
              <h3>Teachers</h3>
              <span class="counter-value">
                <CountUp start={0} end={50} duration={2.5} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountersContainer;

import React from "react";
import "./testimonial.css"; // Import CSS file for custom styling
import dummy_Image from "../../assets/image.avif";
const Testimonial = ({ testimonial }) => {
  return (
    <div className="container mt-5" style={{ maxWidth: "300px" }}>
      <div className="row">
        <div className="col-12 col-md-4 mx-auto">
          <div className="d-md-none">
            <div className="testimonial-card">
              <div className="testimonial-content mt-5">
                <img
                  src={dummy_Image}
                  alt="Testimonial Avatar"
                  className="testimonial-image"
                />
                <h3>{"Gaurav Teli"}</h3>
                <p>{"Hey this i a best component i have made"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

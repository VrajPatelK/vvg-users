import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import "./footer.css"
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>University Address</h5>
            <p><FaMapMarkerAlt /> 123 University St, City, Country</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p><FaPhone /> +123456789</p>
            <p><FaEnvelope /> info@example.com</p>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <p>
              <a href="https://facebook.com" className="text-light"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-light"><FaInstagram /></a>
              <a href="https://whatsapp.com" className="text-light"><FaWhatsapp /></a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-center mt-4">© 2024 University Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

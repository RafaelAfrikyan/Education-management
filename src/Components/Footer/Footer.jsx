import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <iframe
            src="https://maps.google.com/maps?q=armenian%20code%20academy&t=&z=15&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
            width="100%"
            height="350"
            title="Google Map"
            style={{ margin: "10px" }}
          ></iframe>
        </div>
        <div className="row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a>about us</a>
              </li>
              <li>
                <a>our services</a>
              </li>
              <li>
                <a>privacy policy</a>
              </li>
              <li>
                <a>affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact us</h4>
            <ul>
              <li>
                <a>E-mail: university@gmail.com</a>
              </li>
              <li>
                <a>Phone number: +374 77 77 77</a>
              </li>
              <li>
                <a>Fax: 1453224522</a>
              </li>
              <li>
                <a>Direct Message via Website</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a>
                <i className="fab fa-twitter"></i>
              </a>
              <a>
                <i className="fab fa-instagram"></i>
              </a>
              <a>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

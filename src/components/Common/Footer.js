import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { card1 } from "../../images/cards.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h6 className="text-white">FOLLOW US</h6>
            <div className="text-white footer1 " style={{ display: "flex" }}>
              <Link
                className="text-white pr-3 mt-2 footer2"
                style={{ fontSize: "23px" }}
                to="/"
              >
                <FaFacebook />
              </Link>
              <Link
                className="text-white pr-3 mt-2 footer3"
                style={{ fontSize: "23px" }}
                to="/"
              >
                <AiOutlineInstagram />
              </Link>
              <Link
                className="text-white pr-3 mt-2 footer4"
                style={{ fontSize: "23px" }}
                to="/"
              >
                <SiGmail />
              </Link>
              <Link
                className="text-white pr-3 mt-2 footer4"
                style={{ fontSize: "23px" }}
                to="/"
              >
                <AiFillTwitterCircle />
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h6 className="text-white">COMPANY</h6>
            <div className="footer6">
              <Link className="text-white mt-2 footer6 mb-2" to="/">
                Contact Us
              </Link>
              <br />
              <Link className="text-white mt-2 footer6" to="/">
                Track Shipment
              </Link>
              <br />
              <Link className="text-white mt-2 footer6" to="/">
                Privacy Policy
              </Link>
              <br />
              <Link className="text-white mt-2 footer6" to="/">
                Returns And Exchange Policy
              </Link>
              <br />
              <Link className="text-white mt-2 footer6" to="/">
                Shipping Policy
              </Link>
              <br />
              <Link className="text-white mt-2 footer6" to="/">
                Terms & Conditions
              </Link>
              <br />
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="text-white">SUBSCRIBE FOR NEWSLETTER</h6>
            <form>
              <input
                type="text"
                className="footer-form"
                placeholder=" Your Email(required)"
              />
              <br />
              <button className="btn mt-2 text-white ml-2">Signup</button>
            </form>
            <img
              src="https://www.teeshade.com/wp-content/uploads/2020/06/cards.png"
              className="mt-2"
              alt="img"
              width="300px"
            />
          </div>
        </div>
      </div>
      <p className="mt-5 text-white text-center">Copyright 2020 © Amazon</p>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    window.location.href = "/";
  };
  //console.log(localStorage.getItem("role"))
  const data = localStorage.getItem("role");

  return (
    <div>
      <div className="header">
        <div className="container text-white">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand text-white" to="/">
              Amazon
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>

            <div
              className="collapse navbar-collapse text-white"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/about">
                    AboutUs
                  </Link>
                </li>
                <li className="nav-item active ">
                  <Link className="nav-link text-white" to="/cart">
                    Cart
                  </Link>
                </li>
                {localStorage.getItem("userId") != null ? (
                  <React.Fragment>
                    <li className="nav-item active ">
                      {data === "admin" ? (
                        <Link
                          className="nav-link text-white"
                          to="/admin/dashboard"
                        >
                          A.Dashboard
                        </Link>
                      ) : (
                        <Link
                          className="nav-link text-white"
                          to="/user/dashboard"
                        >
                          U.Dashboard
                        </Link>
                      )}
                    </li>
                  </React.Fragment>
                ) : (
                  <li className="nav-item active ">
                    <Link className="nav-link text-white" to="/signup">
                      Signup
                    </Link>
                  </li>
                )}
                {localStorage.getItem("userId") != null ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to="/"
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/signin">
                      Signin
                    </Link>
                  </li>
                )}
                <li className="nav-item"></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

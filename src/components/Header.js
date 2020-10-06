import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from "react-redux";
import { getLoginUser } from "../redux/actions/loginaction";

const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.screenY < 100;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    //window.removeEventListener("scroll");
  }, []);

  //console.log(setIsLogged(true));
  // useEffect(() => {
  //   if (props.user.details === undefined) {
  //     setIsLogged(false);
  //   } else {
  //     setIsLogged(true);
  //   }

  //   console.log("logged", isLogged);
  // }, [isLogged]);

  console.log("allProps", props);

  return (
    <div className="header">
      <div className={scrolled ? "nav scrolled" : "nav"}>
        <div className="container text-white">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">
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
              {props.user.details ? (
                <ul className="navbar-nav  ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/shop">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/accountinfo">
                      Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Logout
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/cart">
                      <AiOutlineShoppingCart /> Cart
                    </Link>
                  </li>
                  <li className="nav-item mt-2 "></li>
                </ul>
              ) : (
                <ul className="navbar-nav  ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/shop">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/accountinfo">
                      Dashboard
                    </Link>
                  </li>

                  <li className="nav-item  ">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <Link className="nav-link" to="/signin">
                      Signin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Signout
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/cart">
                      <AiOutlineShoppingCart /> Cart
                    </Link>
                  </li>
                  <li className="nav-item mt-2 "></li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
var mapStateToProps = (state) => {
  return {
    user: state.loginUsers,
  };
};

var mapDispatchToProps = {
  getLoginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

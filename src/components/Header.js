import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from "react-redux";
import { getLoginUser, getSignOut } from "../redux/actions/loginaction";
import { removeCartItems } from "../redux/actions/cartaction";
import { getProducts } from "../redux/actions/productaction";
import Axios from "axios";

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

  async function handleSignOut() {
    props.getSignOut();
    props.removeCartItems();
  }
  async function handleRemove() {
    props.removeCartItems();
  }

  return (
    <div className="header">
      <div className="nav-header">
        <div className="container text-white">
          <nav className="navbar navbar-expand-lg navbar-light nav-header">
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
              {props?.user?.user?.details ? (
                <ul className="navbar-nav  ml-auto">
                  {props?.user?.user?.details?.role === "admin" ? (
                    <React.Fragment>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/admin/dashboard">
                          AdminDashboard
                        </Link>
                      </li>

                      {/*  <div className="dropdown mt-2">
                        <Link className="dropbtn">
                          {props.user.user.details.name}
                        </Link>
                        <div className="dropdown-content">
                          <Link to="/admin/dashboard" className="admindrp">
                            A.Dashboard
                          </Link>
                          <Link to="/admin/Orders" className="admindrp">
                            Order
                          </Link>
                        </div>
                      </div>
                  */}
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/signin"
                          onClick={() => handleSignOut()}
                        >
                          Signout
                        </Link>
                      </li>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
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
                      <div className="dropdown mt-2">
                        <Link
                          className="dropbtn"
                          to={`/accountinfo/${props.user.user.details._id}`}
                        >
                          {props.user.user.details.name}
                        </Link>
                        <div className="dropdown-content">
                          <Link
                            to={`/accountinfo/${props.user.user.details._id}`}
                            className="admindrp"
                          >
                            Dashboard
                          </Link>
                          <Link to="/myorder" className="admindrp">
                            Order
                          </Link>
                        </div>
                      </div>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/signin"
                          onClick={() => handleSignOut()}
                        >
                          Signout
                        </Link>
                      </li>
                      <li className="nav-item  ">
                        <Link
                          className="nav-link"
                          to="/cart"
                          onClick={() => handleRemove()}
                        >
                          <AiOutlineShoppingCart /> Cart
                        </Link>
                      </li>
                    </React.Fragment>
                  )}
                </ul>
              ) : (
                <ul className="navbar-nav  ml-auto">
                  <li className="nav-item ">
                    <Link className="nav-link " to="/shop">
                      Products
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

                  <li className="nav-item  ">
                    <Link className="nav-link" to="/cart">
                      <AiOutlineShoppingCart /> Cart
                    </Link>
                  </li>
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
    productNames: state.products,
  };
};

var mapDispatchToProps = {
  getLoginUser,
  getSignOut,
  getProducts,
  removeCartItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

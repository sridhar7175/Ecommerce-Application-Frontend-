import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiFillShopping } from "react-icons/ai";
import { FaFirstOrderAlt } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { BsFillLockFill } from "react-icons/bs";

const AccountInfo = () => {
  return (
    <div className="mb-5">
      <div className="ac1">
        <Link className="pl-5 ac2" to="/">
          Home
        </Link>
        <Link className="pl-3 ac2">Account Information</Link>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-4 ac3 mt-5 pl-4 pb-5 pt-4">
            <h4>My Account</h4>
            <p>Hello</p>
            <h5>Sridhar</h5>
            <div className="ac4"></div>
            <div className="ac5">
              <ul>
                <li className="mt-1">
                  <Link className="ac6" to="/accountinfo">
                    <AiOutlineUser /> Account Information
                  </Link>
                </li>
                <li className="mt-1">
                  <Link className="ac6" to="/myorder">
                    <FaFirstOrderAlt /> My Order
                  </Link>
                </li>
                <li className="mt-1">
                  <Link className="ac6" to="/shippingDetails">
                    <AiFillShopping /> Shop Detail
                  </Link>
                </li>
                <li className="mt-1">
                  <Link className="ac6" to="/wishlist">
                    <GiSelfLove />
                    My WishList
                  </Link>
                </li>
                <li className="mt-1">
                  <Link className="ac6" to="/logout">
                    <BsFillLockFill /> Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8  mt-5 pl-4 pb-5">
            <div className="ac7 pl-3 pt-4">
              <h6>Account Information</h6>
              <form>
              <div>
                <input
                  type="text"
                  className="form1"
                  name=""
                  placeholder="Name"
                />
                </div>
                <input
                type="text"
                className="form1 mt-2"
                name=""
                placeholder="Email"
              />
              <input
              type="text"
              className="form1 mt-2"
              name=""
              placeholder="Phone"
            />
            <input
            type="text"
            className="form1 mt-2"
            name=""
            placeholder="Address"
          />
          <br/>
          <button className="btn3 mt-3">UpdateProfile</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;

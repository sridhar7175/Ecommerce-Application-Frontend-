import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiFillShopping } from "react-icons/ai";
import { FaFirstOrderAlt } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { BsFillLockFill } from "react-icons/bs";
import Axios from "axios";

const AccountInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const id = window.location.pathname.slice(12);

  const updateprofile = (e) => {
    e.preventDefault();
    let update = {
      name: name,
      email: email,
      address: address,
      phone: phone,
    };
    Axios.put(`http://localhost:5000/api/updateuserdetails/${id}`, update)

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
                <input
                  type="text"
                  className="form1 mt-2"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form1 mt-2"
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className="form1 mt-2"
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  placeholder="Address"
                />
                <br />
                <button className="btn3 mt-3" onClick={updateprofile}>
                  UpdateProfile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;

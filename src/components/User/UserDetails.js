import React, { useState } from "react";
import { Link } from "react-router-dom";
const UserDetails = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("")
  //const id = window.location.pathname.slice(22);
  console.log("data",window.location.pathname.slice(15))

  return (
    <div>
      <div className="ud1 pt-2 pb-2">
        <h5>MY ACCOUNT</h5>
        <h6>USER DETAILS</h6>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-sm-4 mt-5 ud2 mb-5">

        <div className="ud5 mt-3">
        <div className=" mt-2 mb-3" style={{ display: "flex" }}>
        <img
          src="https://secure.gravatar.com/avatar/053467956553007b62a4cc9eb47ad16d?s=70&d=mm&r=g"
          alt="aa"
          style={{borderRadius:"10px"}}
        />
        <h6 className="mt-4 ml-3">Sridhar Reddy</h6>
      </div>
          <ul>
            <li className="mt-1">
              <Link
                className="ud3"
                to="/user/dashboard"
                style={{ textDecoration: "none" }}
              >
                Dashboard
              </Link>
              <div className="ud4 pb-1"></div>
            </li>
            <li className="mt-1">
              <Link
                className="ud3"
                to="/user/order"
                style={{ textDecoration: "none" }}
              >
                Orders
              </Link>
              <div className="ud4 pb-1"></div>
            </li>
            <li className="mt-1">
              <Link
                className="ud3"
                to="/user/downloads/"
                style={{ textDecoration: "none" }}
              >
                Downloads
              </Link>
              <div className="ud4 pb-1"></div>
            </li>
            <li className="mt-1">
              <Link
                className="ud3"
                to="/user/edit-address/"
                style={{ textDecoration: "none" }}
              >
                Address
              </Link>
              <div className="ud4 pb-1"></div>
            </li>
            <li className="mt-1">
              <Link
                className="ud3"
                to="/user/edit-user/"
                style={{ textDecoration: "none" }}
              >
                User Details
              </Link>
              <div className="ud4 pb-1"></div>
            </li>
            <li className="mt-1">
              <Link className="ud3" to='/' style={{ textDecoration: "none" }}>
                Logout
              </Link>
              <div className="ud4 pb-1"></div>
            </li>
          </ul>
        </div>
      </div>
          <div className="col-sm-4 mt-5 mb-5 ud6">
            <div className="user-form1">
              <label>Name*</label>
              <input
                type="text"
                name="name"
                className="user-form2"
              />
              <br />
              <label>Phone*</label>
              <input
                type="text"
                name="name"
                className="user-form2"
              />
              <br />
              <label>Email address*</label>
              <input
                type="text"
                name="name"
                className="user-form2"
              />
              <br />
              <label>Address*</label>
              <input
                type="text"
                name="name"
                className="user-form2"
              />
              <br />
              <button className="btn btn-danger mt-2">Save Change</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

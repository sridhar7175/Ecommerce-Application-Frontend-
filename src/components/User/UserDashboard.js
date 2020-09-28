import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <div className="ud1 pt-2 pb-2">
        <h5>
          <b>MY ACCOUNT</b>
        </h5>
        <h6>DASHBOARD</h6>
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
                    User my Details
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
          <div className="col-sm-4 mt-5 mb-5 ud6 ml-5">
            <h6>
              Hello sridhar (not sridhar? <Link>Log out</Link>)
            </h6>
            <p>
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
            <div>
              <Link to="/user/order">
                <button className="btn1 success mt-3 text-left mr-4">
                  Orders
                </button>
              </Link>
              <Link to="/user/downloads/">
                <button className="btn1 success mt-3 text-left mr-2">
                  Downlaods
                </button>
              </Link>
              <Link to="/user/edit-address/">
                <button className="btn1 success mt-3 text-left mr-4">
                  Address
                </button>
              </Link>
              <Link to="/user/edit-user/">
                <button className="btn1 success mt-3 text-left mr-3">
                  User Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

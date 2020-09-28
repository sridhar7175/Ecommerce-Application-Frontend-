import React from 'react'
import {Link} from 'react-router-dom'

const UserDownloads = () => {
    return (
        <div>
        <div className="ud1 pt-2 pb-2">
        <h5>MY ACCOUNT</h5>
        <h6>DOWNLOADS</h6>
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
            <Link to="/">
              <button className="btn btn-dark">Browse Products</button>
            </Link>
            <h6 className="mt-2">No downloads available yet.</h6>
          </div>
        </div>
      </div>
        </div>
    )
}

export default UserDownloads

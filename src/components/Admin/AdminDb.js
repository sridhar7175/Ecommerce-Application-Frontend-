import React from "react";
import { Link } from "react-router-dom";

const AdminDb = () => {
  const name=(localStorage.getItem("name"))
  const email=(localStorage.getItem('email'))
  return (
    <div>
      <div className="userdashboard1 bg-success p-4 mt-1">
        <h1 className="text-center mt-3 mb-3 text-white">
          Welcome to the Admin area
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <h4 className="card-header bg-dark text-white">
                  Admin Navigation
                </h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="" className="nav-link text-success">
                      Update my details
                    </Link>
                  </li>

                  <li className="list-group-item">
                    <Link to="/admin/create/product" className="nav-link text-success">
                      Create Product
                    </Link>
                  </li>
                  <li className="list-group-item">
                  <Link to="/admin/products" className="nav-link text-success">
                    Manage Product
                  </Link>
                </li>
                  <li className="list-group-item">
                  <Link to="/addproduct" className="nav-link text-success">
                    Check all orders
                  </Link>
                </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 mb-5">
              <div className="card">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="badge badge-success mr-2">Name:{name}</span>
                  </li>
                  <li className="list-group-item">
                    <span className="badge badge-success mr-2">
                      Email:{email}
                    </span>
                  </li>
                  <li className="list-group-item">
                    <span className="badge badge-success mr-2">Address:</span>
                  </li>
                  <li className="list-group-item">
                    <span className="badge badge-success mr-2">Phone:</span>
                  </li>

                  <li className="list-group-item">
                    <span className="badge badge-danger">Admin Area</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDb;

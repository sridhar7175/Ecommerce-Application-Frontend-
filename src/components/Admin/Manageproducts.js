import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom';
import Axios from 'axios'

const Manageproducts = () => {
    const [productNames, setProductNames] = useState([]);
  

    
  const FetechData = () => {
    Axios.get("http://localhost:5000/api/user/product")
      .then((productNames) => {
        console.log(productNames);
        setProductNames(productNames.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    FetechData();
  }, []);
  
  const onDelete=(id)=>{
    Axios.delete('http://localhost:5000/api/user/product/' + id)
    .then((response) => FetechData())
  }
  return (
    <div className="container bg-info p-4 mt-5">
      <Link className="btn btn-warning" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <h2 className="text-center text-white my-3">Total  products</h2>
      <div className="container p-4 box2">
        {productNames.map((productName, index) => {
          return (
            <div key={index} className="row">
              <div className="col-sm-4">
                <h3 className=" text-white text-left">{productName.productName}</h3>
              </div>
              <div className="col-sm-4">
                <Link
                  className="btn btn-success"
                  to={`/admin/product/update/${productName._id}`}
                >
                  <span className="">Update</span>
                </Link>
              </div>
              <div className="col-sm-4">
                <button
                onClick={() => onDelete(productName._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Manageproducts;

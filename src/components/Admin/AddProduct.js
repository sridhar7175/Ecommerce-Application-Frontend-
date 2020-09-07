import React, { useState } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");

  const onChangeProduct = (e) => {
    console.log(e.target.value);
    setProductName(e.target.value);
  };

  const addproduct = (e) => {
    e.preventDefault();
    let obj1 = {
      productName: productName,
      productBrand: productBrand,
      productDescription: productDescription,
      productPrice: productPrice,
    };
    Axios.post("http://localhost:5000/api/user/product", obj1)
      .then((res) => {
        console.log(res);
        localStorage.setItem("userId", res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        alert("Please Enter the all Details");
      });
    setProductName("");
    setProductBrand("");
    setproductPrice("");
    setProductDescription("");
  };
  return (
    <div className="container p-3 mt-3 mb-5 pb-5 bg-info text-white">
    <Link className="btn btn-warning" to={`/admin/dashboard`}>
    <span className="">Admin Home</span>
  </Link>
      <h1 className="pt-3 text-center" style={{ fontFamily: "Alata, sans-serif" }}>
        Add New Products here!
      </h1>
      <div className="box3 rounded p-5">
      <form>
        <div>
          <input
            type="text"
            name="productName"
            className="form-control mt-2"
            value={productName}
            placeholder="ProductName..."
            onChange={onChangeProduct}
          />
        </div>
        <div>
          <input
            type="text"
            name="productBrand"
            className="form-control mt-2"
            value={productBrand}
            placeholder="ProductBrand..."
            onChange={(e) => setProductBrand(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="productDescription"
            className="form-control mt-2"
            value={productDescription}
            placeholder="productDescription..."
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="productPrice"
            className="form-control mt-2"
            value={productPrice}
            placeholder="ProductPrice..."
            onChange={(e) => setproductPrice(e.target.value)}
          />
        </div>

        <button
          onClick={addproduct}
          className="mt-3 mb-4 form-control btn-success"
        >
          CreateProduct
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddProduct;

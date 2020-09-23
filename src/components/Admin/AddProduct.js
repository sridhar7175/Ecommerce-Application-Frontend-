import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = (props) => {
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPicture, setProductPicture] = useState("");

  const onChangeProduct = (e) => {
    setProductName(e.target.value);
  };

  useEffect(() => {
    console.log(productPicture, "productPicture");
  }, [productPicture]);

  const handlePhoto = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setProductPicture(file);
    };

    reader.readAsDataURL(file);
  };

  const addproduct = (e) => {
    e.preventDefault();
    console.log(productPicture, "pic");
    const formData = new FormData();
    formData.append("productPicture", productPicture);
    formData.append("productName", productName);
    formData.append("productBrand", productBrand);
    formData.append("productDescription", productDescription);
    formData.append("productPrice", productPrice);

    Axios.post("http://localhost:5000/api/createproduct", formData, {})
      .then((response) => {
        console.log(response);

        Swal.fire({ title: "created successfully", timer: 1500 });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({ title: "Please Enter All Details", timer: 1500 });
      });
    setProductName("");
    setProductBrand("");
    setProductPrice("");
    setProductDescription("");
    setProductPicture("");
  };

  return (
    <div className="container p-3 mt-3 mb-5 pb-5 bg-info text-white">
      <Link className="btn btn-warning" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <h1
        className="pt-3 text-center"
        style={{ fontFamily: "Alata, sans-serif" }}
      >
        Add New Products here!
      </h1>
      <div className="box3 rounded p-5">
        <form>
          {productPicture && productPicture.length}
          <div>
            <input
              className="form-control mt-2"
              onChange={(e) => handlePhoto(e)}
              type="file"
              placeholder="choose a file"
            />
          </div>
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
              onChange={(e) => setProductPrice(e.target.value)}
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

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Updateproduct = (props) => {
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productPicture, setProductPicture] = useState("");
  const id = window.location.pathname.slice(22);

  const onChangeProduct = (e) => {
    setProductName(e.target.value);
  };
  const FetechData = () => {
    Axios.get(`http://localhost:5000/api/getoneproduct/${id}`)
      .then((res) => {
        console.log(res.data);
        const details = res.data[0];
        console.log(details);
        setProductName(details.productName);
        setProductBrand(details.productBrand);
        setProductDescription(details.productDescription);
        setproductPrice(details.productPrice);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(productPicture, "productPicture");
    FetechData();
  }, [productPicture]);

  const handlePhoto = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setProductPicture(file);
    };

    reader.readAsDataURL(file);
  };

  const updateproduct = (e) => {
    e.preventDefault();
    console.log(productPicture, "pic");
    const formData = new FormData();
    formData.append("productPicture", productPicture);
    formData.append("productName", productName);
    formData.append("productBrand", productBrand);
    formData.append("productDescription", productDescription);
    formData.append("productPrice", productPrice);
    Axios.put(`http://localhost:5000/api/updateproduct/${id}`, formData, {})
      .then((response) => {
        console.log(response);
        Swal.fire({ title: "successfully Updated", timer: 1500 });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({ title: "Please Enter All Details", timer: 1500 });
      });
    setProductName("");
    setProductBrand("");
    setproductPrice("");
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
        Update Products here!
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
              onChange={(e) => setproductPrice(e.target.value)}
            />
          </div>

          <button
            onClick={updateproduct}
            className="mt-3 mb-4 form-control btn-success"
          >
            UpdateProduct
          </button>
        </form>
      </div>
    </div>
  );
};

export default Updateproduct;

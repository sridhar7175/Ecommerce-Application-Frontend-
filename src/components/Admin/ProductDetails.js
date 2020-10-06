import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import { connect } from "react-redux";

const ProductDetails = (props) => {
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPicture, setProductPicture] = useState("");
  useEffect(() => {
    let id = window.location.pathname.slice(1);
    id = id.split("/")[1];
    //console.log("Propsaa", id);
    const product = props.productNames.productNames.filter((productind) => {
      //console.log("ind", productind._id);
      return productind._id === id;
    });
    if (product) productData(product[0]);

    const productId = id.substring(id.lastIndexOf("/") + 1);
    productData(productId);
  }, []);

  const productData = (id) => {
    Axios.get(`http://localhost:5000/api/getoneproduct/${id}`)
      .then((res) => {
        //console.log(res.data);
        const details = res.data[0];
        //console.log(details);
        setProductName(details.productName);
        setProductBrand(details.productBrand);
        setproductPrice(details.productPrice);
        setProductDescription(details.productDescription);
        setProductPicture(details.productPicture);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let imageUrl = "";
  if (productPicture[0]) imageUrl = generatePublicUrl(productPicture[0].img);
  return (
    <div>
      <div className="container mt-3 pd1 mb-5">
        <h5>
          <Link to="/">Go Back</Link>
        </h5>
        <p className="mt-2">
          Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen
          Intel Core i7) - Space Grey
        </p>
        <div className="row">
          <div className="col-sm-6 pd2 mt-2">
            <img src={imageUrl} alt="pad" width="350px" height="300px" />
          </div>
          <div className="col-sm-6 pd3 mt-3">
            <h4>
              NAME :<b>{productName}</b>
            </h4>
            <h4>
              Brand :<b>{productBrand}</b>
            </h4>
            <h4>
              Price : <b>₹{productPrice}</b>
            </h4>
            <select>
              <option>Select Qty</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <br />
            <Link to="/cart">
              <button
                className="btn btn-info btn-sm mt-2"
                style={{ marginRight: "10px" }}
              >
                Add To Cart
              </button>
            </Link>
            <div className="pd4 mt-4">
              <h5>About Item</h5>
              <ul>
                <li>{productDescription}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
var mapStateToProps = (state) => {
  return {
    productNames: state.products,
  };
};

var mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

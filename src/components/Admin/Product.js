import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import { getProducts } from "../../redux/actions/productaction";
import { connect } from "react-redux";
import { products } from "../../redux/reducers/productreducer";
const Product = (props) => {
  const [productNames, setProductNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  console.log(props.productNames);

  useEffect(() => {
    props.getProducts();
  }, []);

  useEffect(() => {
    console.log(props, "props");
    setProductNames(props?.productNames?.productNames);

    //setProductNames(props.productNames)
  }, [props]);

  // const filternames = productNames.filter((productName) => {
  //   return productName.productName.toLowerCase().includes(search.toLowerCase());
  // });

  const AddTocart = (cart) => {};
  return (
    <div className="container mt-5 ">
      <h3
        className="text-left mb-5"
        style={{ fontFamily: "'Play', sans-serif" }}
      >
        List of Products
      </h3>
      <form className="form-inline text-center">
        <input
          className="form-control w-50 mb-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="text-center">
        <div>
          {productNames?.map((productNam) => (
            <div
              key={productNam._id}
              className="card1 "
              style={{
                display: "inline-block",
                marginRight: "100px",
                textAlign: "center",
              }}
            >
              <div>
                <img
                  src={generatePublicUrl(productNam.productPicture[0]?.img)}
                  width="250px"
                  height="200px"
                  style={{ borderRadius: "10px" }}
                  alt="img"
                />
              </div>
              <div>Name:{productNam.productName}</div>
              <div>Brand:{productNam.productBrand}</div>
              <div>productDescription:{productNam.productDescription}</div>
              <div>Price:{productNam.productPrice}.00</div>
              <Link to="/cart">
                <button
                  className="btn btn-info btn-sm mt-2"
                  style={{ marginRight: "10px" }}
                  onClick={() => AddTocart(productNam)}
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

var mapStateToProps = (state) => {
  // console.log(state)
  return {
    productNames: state.products,
  };
};

var mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

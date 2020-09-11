import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [productNames, setProductNames] = useState([]);
  const [search, setSearch] = useState("");

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
  const filternames = productNames.filter((productName) => {
    return productName.productName.toLowerCase().includes(search.toLowerCase());
    //productName.productBrand.toLowerCase().includes(search.toLowerCase())
  });

  const AddTocart = (cart) => {};

  return (
    <div className="container mt-5 ">
      <h3 className="text-left mb-5">List of Products</h3>
      <form class="form-inline text-center">
        <input
          className="form-control w-50 mb-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="text-center">
        {productNames.length ? (
          <div>
            {filternames.map((productNam) => (
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
                  {productNam.productBrand === "Levis" ? (
                    <img
                      src="images/one.jpg"
                      alt="w1"
                      width="200px"
                      height="150px"
                    />
                  ) : (
                    <img
                      src="images/mac1.jpg"
                      alt="w2"
                      width="200px"
                      height="150px"
                    />
                  )}
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
                {/* <Link to="/signin">
                {" "}
                <button className="btn btn-info btn-sm mt-2">Buy Now</button>
                </Link>*/}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>No Record Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;

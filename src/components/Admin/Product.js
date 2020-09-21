import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";

const Product = (props) => {
  const [productNames, setProductNames] = useState([]);
  const [search, setSearch] = useState("");

  const FetechData = () => {
    Axios.get("http://localhost:5000/api/getproduct")
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
  });

  // console.log(productNames.productPicture[0].img)

  const AddTocart = (cart) => {};
  //console.log(filternames.length,filternames,"product")
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
          {filternames.length ? (
            <div>
              {" "}
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
                    <img
                      src={generatePublicUrl(productNam.productPicture[0].img)}
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
                  {/* <Link to="/signin">
              {" "}
              <button className="btn btn-info btn-sm mt-2">Buy Now</button>
              </Link>*/}
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-5">
              <h1 className="mb-5" style={{ fontFamily: "'Play', sans-serif" }}>
                No Products Display
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

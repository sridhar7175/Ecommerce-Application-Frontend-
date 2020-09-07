import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../store";
import { addToCarts } from "../../action/addtocart";

const Product = (props) => {
  const [productNames, setProductNames] = useState([]);
  // console.log("allprops", props);
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

  const AddTocart = (cart) => {
    // //e.preventDefault()
    // props.addToCart({
    //   product,
    // });
    console.log(store.dispatch(addToCarts(cart)));
  };

  // const addproduct = (e) => {
  //   e.preventDefault();
  //   window.location='/addproduct'
  // };
  return (
    <div className="container mt-5 ">
      <h3 className="text-left">List of Products</h3>
      {/*  <button
        onClick={addproduct}
        className="mt-3 mb-4 form-control btn-warning"
      >
        AddProduct
    </button>*/}
      <div className="text-center">
        {productNames.map((productNam) => (
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
            <Link to="/signin">
              {" "}
              <button className="btn btn-info btn-sm mt-2">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   addtocarts: state.addtocarts,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (add) => {
//     dispatch(addToCart(add));
//   },
// });

export default Product;

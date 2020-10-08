import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import { getProducts } from "../../redux/actions/productaction";
import { connect } from "react-redux";
import Axios from "axios";
import { getLoginUser } from "../../redux/actions/loginaction";

const Product = (props) => {
  const [productNames, setProductNames] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const id = window.location.pathname.slice(0);
  // const [search, setSearch] = useState("");

  //console.log(id);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false);

  const sortArray = async (e) => {
    console.log(e.target.value, "e");
    const range_value = e.target.value.split("-");

    const sortedPrices = productNames.slice(0);
    console.log("sortBYSlice", sortedPrices);
    const sorted = await sortedPrices.filter((product) => {
      console.log(product.productPrice, "price");
      return (
        product.productPrice >= Number(range_value[0]) &&
        product.productPrice <= Number(range_value[1])
      );
    });
    console.log("resulted sort", sorted);
    setSortedList(sorted);
  };

  useEffect(() => {
    props.getProducts();
  }, []);

  useEffect(() => {
    //console.log(props, "props");
    setProductNames(props?.productNames?.productNames);
    setSortedList(props?.productNames?.productNames);

    //setProductNames(props.productNames)
  }, [props]);

  // const filternames = productNames.filter((productName) => {
  //   return productName.productName.toLowerCase().includes(search.toLowerCase());
  // });
  //console.log("ProductDetails", props);

  const AddTocart = () => {
    Axios.post("http://localhost:5000/api/user/createaddtocart").then((res) =>
      console.log(res)
    );
  };
  return (
    <div className="container mt-5 ">
      <div className="product123 mb-5">
        <h3 className="text-left " style={{ fontFamily: "'Play', sans-serif" }}>
          All Products
        </h3>
        <select className="product124 w-25" onChange={(e) => sortArray(e)}>
          <option value="0-500">Below Rs.500</option>
          <option value="1000-2000">Rs.1000-2000</option>
          <option value="2000-4000">Rs.2000-4000</option>
          <option value="4000-8000">Rs.4000-8000</option>
        </select>
      </div>

      <div className="text-center">
        {sortedList?.map((productNam, _id) => (
          <div
            key={productNam._id}
            className="card1 "
            style={{
              display: "inline-block",
              marginRight: "20px",
              textAlign: "center",
            }}
          >
            <div>
              <Link to={`/productdetails/${productNam._id}`}>
                <img
                  src={generatePublicUrl(productNam.productPicture[0]?.img)}
                  width="250px"
                  height="200px"
                  style={{ borderRadius: "10px" }}
                  alt="img"
                />
              </Link>
            </div>
            <div className="mt-2">Name:{productNam.productName}</div>
            <div className="mt-2">Price:₹{productNam.productPrice}.00</div>
            {props?.loginUsers?.user?.details?.role === "admin" ? (
              ""
            ) : (
              <Link to="/cart">
                <button
                  className=" mt-4 productbutton"
                  style={{ marginRight: "10px" }}
                  onClick={AddTocart}
                >
                  AddTocart
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

var mapStateToProps = (state) => {
  return {
    productNames: state.products,
    loginUsers: state.loginUsers,
  };
};

var mapDispatchToProps = {
  getProducts,
  getLoginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

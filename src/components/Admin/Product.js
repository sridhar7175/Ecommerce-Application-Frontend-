import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../urlConfig";
import { getProducts } from "../../redux/actions/productaction";
import { connect } from "react-redux";

const Product = (props) => {
  const [productNames, setProductNames] = useState([]);
  //const id = window.location.pathname.slice(22);
  //console.log(id);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false);
  //const [search, setSearch] = useState("");

  const filterCost = () => {
    //console.log("ProductPrice");
    productNames.sort((a, b) => {
      return a.productPrice - b.productPrice;
    });
  };
  useEffect(() => {
    props.getProducts();
  }, []);

  useEffect(() => {
    //console.log(props, "props");
    setProductNames(props?.productNames?.productNames);

    //setProductNames(props.productNames)
  }, [props]);

  // const filternames = productNames.filter((productName) => {
  //   return productName.productName.toLowerCase().includes(search.toLowerCase());
  // });

  // const productData = () => {
  //   Axios.get(`http://localhost:5000/api/getoneproduct/${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       const details = res.data[0];
  //       console.log(details);
  //       // setProductName(details.productName);
  //       // setProductBrand(details.productBrand);
  //       // setProductDescription(details.productDescription);
  //       // setproductPrice(details.productPrice);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const AddTocart = (cart) => {};
  return (
    <div className="container mt-5 ">
      <div className="product123 mb-5">
        <h3 className="text-left " style={{ fontFamily: "'Play', sans-serif" }}>
          All Products
        </h3>
        <select className="product124 w-25">
          <option onClick={filterCost}>Below Rs.500</option>
          <option>Rs.500-1000</option>
          <option>Rs.1500-2000</option>
          <option>Rs.2500-3500</option>
        </select>
      </div>

      <div className="text-center">
        {productNames?.map((productNam, _id) => (
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
              <Link to="/productdetails">
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
            <Link to="/cart">
              <button
                className=" mt-4 productbutton"
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
  );
};

var mapStateToProps = (state) => {
  return {
    productNames: state.products,
  };
};

var mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

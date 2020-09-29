import React, { useEffect } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Product from "../components/Admin/Product";
import { getProducts } from "../redux/actions/productaction";

import { connect } from "react-redux";
import Footer from "../components/Footer";

const Homepage = (props) => {
  console.log(props, "props");
  useEffect(() => {
    props.getProducts();
  }, []);
  return (
    <div>
      <Header />
      <Home />
      <Product products={props?.all?.products} />
      <Footer />
    </div>
  );
};

var mapStateToProps = (state) => {
  return {
    productNames: state.products,
    user: state.loginUsers,
  };
};

var mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

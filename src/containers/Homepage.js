import React, { useEffect } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Product from "../components/Admin/Product";
import { getProducts } from "../redux/actions/productaction";

import { connect } from "react-redux";
import Footer from "../components/Common/Footer";
import AdminDashboard from "../components/Admin/AdminDashboard";

const Homepage = (props) => {
  //console.log(props, "props");
  // console.log("aaaaaaaaa", props?.loginUsers?.user?.details?.role);
  useEffect(() => {
    props.getProducts();
  }, []);
  //console.log(props?.loginUsers?.user?.details?.role, "role");
  return (
    <div>
      <Header user={props.user} />

      {props?.loginUsers?.user?.details?.role === "user" ? (
        <div>
          <Home />
          <Product products={props?.all?.products} />
        </div>
      ) : (
        <Home />
      )}

      <Footer />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

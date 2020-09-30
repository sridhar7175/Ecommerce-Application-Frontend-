import React, { useEffect } from "react";
import Footer from "../components/Common/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import { connect } from "react-redux";
import { getLoginUser } from "../redux/actions/loginaction";

const Loginpage = (props) => {
  // console.log(props, "Loginprops");
  // console.log(props.getLoginUser())

  useEffect(() => {
    async function fetchMyAPI() {
      await props.getLoginUser("swarup", "pass123");
      console.log("all", props);
    }
    fetchMyAPI();
  }, []);

  return (
    <div>
      <Header />
      <Login user={props.user} />
      <Footer />
    </div>
  );
};
var mapStateToProps = (state) => {
  console.log("state", state);
  return {
    user: state.loginUsers,
  };
};

var mapDispatchToProps = {
  getLoginUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);

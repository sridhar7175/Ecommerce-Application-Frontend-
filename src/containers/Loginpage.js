import React, { useEffect } from "react";
import Footer from "../components/Common/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import { connect } from "react-redux";
import { getLoginUser } from "../redux/actions/loginaction";

const Loginpage = (props) => {
  useEffect(() => {
    //console.log("propsss", props);
    if (props.user?.user?.details?._id) {
      props.history.push("/");
    } else {
      console.log("user not logged in");
    }
  }, [props]);
  async function handleLoginUser(username, password) {
    await props.getLoginUser(username, password);
    //console.log(props, "props after login");
  }

  return (
    <div>
      <Header />
      <Login
        user={props.user}
        onLoginUser={(username, password) =>
          handleLoginUser(username, password)
        }
      />
      <Footer />
    </div>
  );
};
var mapStateToProps = (state) => {
  return {
    user: state.loginUsers,
  };
};

var mapDispatchToProps = {
  getLoginUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);

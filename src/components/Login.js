import React, { useState } from "react";
//import Axios from "axios";
import { connect } from "react-redux";
import { getLoginUser } from "./../redux/actions/loginaction";
import { Link } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //Validation
  const validate = () => {
    let emailError = "";
    let passwordError = "";
    if (!email) {
      emailError = "Email Cannot Be Empty";
    }
    if (!password) {
      passwordError = "Password Cannot Be Empty";
    } else if (password.length < 3) {
      passwordError = "Password needs to be 3 characters or more";
    }
    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      return false;
    }
    return true;
  };
  // console.log(props.user, "user props");

  //OnFocus
  const emailFous = () => {
    setEmailError(false);
  };
  const passwordFocus = () => {
    setPasswordError(false);
  };
  //Login Submit
  const login = async (e) => {
    e.preventDefault();
    const isVaild = validate();
    await props.onLoginUser(email, password);

    // Axios.post("http://localhost:5000/api/signin", body)
    //   .then((res) => {
    //     console.log(res.data);
    //     localStorage.setItem("userId", res.data._id);
    //     localStorage.setItem("role", res.data.role);
    //     localStorage.setItem("name", res.data.name);
    //     localStorage.setItem("email", res.data.email);
    //     window.location.href = "/";
    //   })
    //   .catch((err) => {
    //     console.log(JSON.stringify(err));
    //     alert("Failed to Login, Please try again");
    //   });
    // setEmail("");
    //setPassword("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="container mt-5 login-box mb-5">
        <h5 className="pl-5">Signin Here</h5>
        <form>
          <div>
            <input
              type="email"
              name="email"
              className="form-control mt-3"
              placeholder="Enter a Email....."
              onFocus={emailFous}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div
            style={{
              color: "red",
              fontSize: 10,
              fontWeight: "bold",
              outlineColor: "red",
            }}
            className="pl-5"
          >
            {emailError}
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="form-control mt-3"
              placeholder="Enter a Password....."
              value={password}
              onFocus={passwordFocus}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              color: "red",
              fontSize: 10,
              fontWeight: "bold",
              outlineColor: "red",
            }}
            className="pl-5"
          >
            {passwordError}
          </div>
          {props?.user?.user?.message && (
            <p style={{ color: "red" }}>{props?.user?.user?.message}</p>
          )}
          <button onClick={login} className="form-control btn-danger mt-3">
            Submit
          </button>
          <p
            className="pl-4 mt-2"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            Don't have an account <Link to="/signup">? Signup</Link>
          </p>
        </form>
      </div>
      <span></span>
    </div>
  );
};
var mapStateToProps = (state) => {
  //console.log("state",state)
  return {
    user: state.loginUsers,
  };
};

var mapDispatchToProps = {
  getLoginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

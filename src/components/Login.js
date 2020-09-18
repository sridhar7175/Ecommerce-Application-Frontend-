import React, { useState } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    var body = { email: email, password: password };

    Axios.post("http://localhost:5000/api/signin", body)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("userId", res.data._id);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        alert("Failed to Login, Please try again");
      });
    setEmail("");
    setPassword("");
  };
  return (
    <div>
    <div className="container mt-5 login-box">
      <h5 className="pl-5">Login Here</h5>
      <form>
        <div>
          <input
            type="text"
            name="email"
            className="form-control mt-3"
            placeholder="Enter a Email....."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            className="form-control mt-3"
            placeholder="Enter a Password....."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={login} className="form-control btn-danger mt-3">
          Submit
        </button>
        <p className="pl-4 mt-2">Don't have an account <Link to='/signup'>? Register</Link></p>
      </form>
    </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);

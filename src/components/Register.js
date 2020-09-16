import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      email: email,
      role: role,
      password: password,
    };
    console.log(obj);
    Axios.post("http://localhost:5000/api/signup", obj)
      .then((res) => console.log(res))
      .then((data) => {
        window.location.href = "/signin";
        console.log(data);
        alert(
          "Thank you, You have registered successfully. We will email you confirmation shortly."
        );
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        alert("Failed to register, Please try again");
      });
  };

  return (
    <div className="container text-center mt-5">
      <h1>Sign Up page</h1>
      <h4 className="mt-2 mb-2">A page for user to sign up!</h4>
      <form>
        <div>
          <input
            type="text"
            name="name"
            className="form-control mt-3"
            placeholder="Enter a name....."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            className="form-control mt-3"
            placeholder="Enter a Email....."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div></div>
        <h6 className="mt-3"></h6>
        <select
          className="form-control"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Please Select</option>
          <option>user</option>
          <option>admin</option>
        </select>
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
        <button
          onClick={register}
          className="form-control btn-success mt-3 mb-2"
        >
          Submit
        </button>
        <span className="mt-2">
          Already have an account? <Link to="/signin">Sign in</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;

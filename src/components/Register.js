import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    if (!name) {
      setNameError("Name cannot Be Empty");
    } else if (!/^[A-Za-z]+/.test(name.trim())) {
      setNameError("Enter a valid name");
    }
    if (!email) {
      setEmailError("Email Cannot Be Empty");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("Email Can Be valid ");
    }
    if (!role) {
      setRoleError("Role Cannot Be Empty");
    }
    if (!password) {
      setPasswordError("Password Cannot Be Empty");
    } else if (!password.length < 3) {
      setPasswordError("Password needs to be 3 characters or more");
    }
    if (nameError || emailError || passwordError || roleError) {
      return false;
    }
    return register;
  };
  // const nameFous = () => {
  //   setNameError(false);
  // };
  // const emailFous = () => {
  //   setEmailError(false);
  // };
  // const roleFocus = () => {
  //   setRoleError(false);
  // };
  // const passwordFocus = () => {
  //   setPasswordError(false);
  // };

  const register = (e) => {
    e.preventDefault();

    // const isValid = validate();
    // if (isValid) {
    //   console.log("The form was submitted with the following data");
    // }
    validate();
    let obj = {
      name: name,
      email: email,
      role: role,
      password: password,
    };
    // console.log(obj);
    Axios.post("http://localhost:5000/api/signup", obj)
      .then((res) => console.log(res))
      .then((data) => {
        window.location.href = "/signin";
        console.log(data);
        Swal.fire({ title: "created successfully", timer: 1500 });
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        Swal.fire({ title: "Please Enter All Details", timer: 1500 });
      });
  };

  return (
    <div className="">
      <div className="container mt-5 register-box mb-5">
        <h5 className="pl-5 mt-2">Signup Here</h5>
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
          <div
            style={{
              color: "red",
              fontSize: 10,
              outlineColor: "red",
              fontWeight: "bold",
            }}
            className="pl-5"
          >
            {nameError}
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
            <select
              className="form-control mt-3"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Please Select</option>
              <option>user</option>
              <option>admin</option>
            </select>
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
            {roleError}
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="form-control mt-3"
              placeholder="Enter a Password....."
              value={password}
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
          <button
            onClick={register}
            className="form-control btn-success mt-3 mb-2"
          >
            Submit
          </button>
          <p
            className="mt-3 pl-5"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          >
            Already have an account?
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

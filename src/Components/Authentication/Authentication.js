import React, { useState } from "react";
import { InputField } from "../Reusables/Reusable";
import "./Authentication.css";

export const Authentication = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    hasAccount: true
  });

  // Destructure state to get the properties
  const { fullName, email, password, hasAccount } = state;

  //User's details to be submitted
  let userDetails = { fullName: "", email: "", password: "" };

  // Update input field value
  const updateValue = ({ value }, name) => {
    setState({ ...state, [name]: value });
  };

  //Select details to submit based on hasAccount
  const handleClick = e => {
    e.preventDefault();
    hasAccount
      ? (userDetails = { email, password })
      : (userDetails = { fullName, email, password });
    console.log("reachable");
    // sumbitUserDetails(userDetails);
  };

  // If Login is selected, it'll send userDetails to the login DB
  return (
    <div>
      <div className="auth-form">
        <h3 className="auth-form-head">{hasAccount ? "Login" : "Sign Up"}</h3>
        <div className="auth-form-inner">
          <InputField
            name="fullName"
            type="fullName"
            label="Full Name"
            placeHolder="Enter your Full Name"
            inputValue={fullName}
            handleChange={updateValue}
            display={hasAccount ? "none" : ""}
            style={
              hasAccount
                ? { display: "none" }
                : {
                    display: "",
                    borderTopRightRadius: "5px",
                    borderTopLeftRadius: "5px"
                  }
            }
            className="auth-form-input"
          />

          <InputField
            name="email"
            type="email"
            label="Email"
            placeHolder="Enter your email"
            inputValue={email}
            handleChange={updateValue}
            className="auth-form-input"
          />
          <InputField
            name="password"
            type="password"
            label="Password"
            placeHolder="Enter your password"
            inputValue={password}
            handleChange={updateValue}
            className="auth-form-input"
          />
          <div>
            Alreary have an account?
            <button
              className="text-button"
              style={{ display: !hasAccount ? "none" : "inline" }}
              onClick={() => {
                setState({ ...state, hasAccount: false });
              }}
            >
              Sign Up
            </button>
          </div>
          <div>
            <button className="auth-button" onClick={handleClick}>
              ->
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

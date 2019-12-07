import React, { useState } from "react";
import { InputField } from "../Reusables/Reusable";

export const Authentication = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    hasAccount: true
  });

  //User's details to be submitted
  let userDetails = { fullName: "", email: "", password: "" };

  // Destructure state to get the properties
  const { fullName, email, password, hasAccount } = state;

  // Update input field value
  const updateValue = ({ value }, name) => {
    setState({ ...state, [name]: value });
  };

  const handleClick = e => {
    e.preventDefault();
    //Select details to submit based on hasAccount
    hasAccount
      ? (userDetails = { email, password })
      : (userDetails = { fullName, email, password });
  };

  // If Login is selected, it'll check the login DB and take required data from the state
  return (
    <div>
      <InputField
        name="fullName"
        type="fullName"
        label="Full Name"
        hidden={hasAccount}
        placeHolder="Enter your fullName"
        inputValue={fullName}
        handleChange={updateValue}
      />

      <InputField
        name="email"
        type="email"
        label="Email"
        placeHolder="Enter your email"
        inputValue={email}
        handleChange={updateValue}
      />

      <InputField
        name="password"
        type="password"
        label="Password"
        placeHolder="Enter your password"
        inputValue={password}
        handleChange={updateValue}
      />

      <button onClick={handleClick}>-></button>
    </div>
  );
};

import React from "react";
import "./Reusable.css";

export const InputField = ({
  name,
  label,
  placeHolder,
  type,
  inputValue,
  handleChange,
  style
}) => {
  console.log(style);
  return (
    <div style={{ ...style }} className="field auth-form-input">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeHolder}
        value={inputValue}
        onChange={({ target }) => {
          handleChange(target, name);
        }}
      />
      <label for={name}>{label}</label>
    </div>
  );
};

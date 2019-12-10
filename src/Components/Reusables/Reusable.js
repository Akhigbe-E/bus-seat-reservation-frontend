import React from "react";
import "./Reusable.css";

export const InputField = ({
  name,
  label,
  placeHolder,
  type,
  inputValue,
  handleChange,
  className,
  style
}) => {
  return (
    <div style={{ ...style }} className="field auth-form-input">
      <input
        type={type}
        id={name}
        className={className}
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

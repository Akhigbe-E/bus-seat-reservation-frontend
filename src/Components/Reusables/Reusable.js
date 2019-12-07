import React from "react";

export const InputField = ({
  name,
  label,
  placeHolder,
  type,
  inputValue,
  handleChange
}) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        value={inputValue}
        onChange={({ target }) => {
          handleChange(target, name);
        }}
      />
    </div>
  );
};

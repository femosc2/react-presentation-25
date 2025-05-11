import React from "react";
import styles from "./styles.module.css";

const InputField = ({ placeholder, onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={styles.inputField}
      />
    </div>
  );
};
export default InputField;

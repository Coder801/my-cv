import React, { useState } from "react";
import styles from "./style.module.scss";

export const CommandLine = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        className={styles.input}
        value={value}
        placeholder="Try natural language instead the command"
        onChange={onChange}
        type="text"
      />
      <div>{value}</div>
    </>
  );
};

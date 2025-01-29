import React, { useRef } from "react";
import styles from "./ImputWithLabel.module.css";
// my firts reusable component

const InputWithLabel = (props) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor={props.id}> {props.children} </label>
      <input
        className={styles.InputWithLabel}
        name={props.name}
        id={props.id}
        type="text"
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        ref={inputRef}
      />
    </>
  );
};

export { InputWithLabel };

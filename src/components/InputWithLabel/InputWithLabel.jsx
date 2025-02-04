import React, { useRef } from "react";
import styles from "./ImputWithLabel.module.css";
import PropTypes from "prop-types";
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

InputWithLabel.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { InputWithLabel };

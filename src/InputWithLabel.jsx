import React, { useRef } from "react";

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

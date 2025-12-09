import React from "react";
import Input from "./Input";

function LabeledInput(props) {
  const { label, id, ...rest } = props;
  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>
      <input id={id} {...rest} />
    </>
  );
}

export default LabeledInput;

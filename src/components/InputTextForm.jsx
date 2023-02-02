import { forwardRef } from "react";

const InputTextForm = forwardRef(
  ({ type, name, placeholder, onChange, onBlur, children }, ref) => {
    return (
      <>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
        {children}
      </>
    );
  }
);

export default InputTextForm;

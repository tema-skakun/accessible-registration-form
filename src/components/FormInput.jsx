import {useState} from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {label, errorMessage, onChange, id, name, type, ariaLabel, ...inputProps} = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="formInput">
      <label htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-label={ariaLabel}
        aria-describedby={name}
        type={showPassword ? "text" : type}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span id={id}>
        {errorMessage}
      </span>
      {type === "password" && (
        <button
          name={showPassword ? "hidePassword" : "showPassword"}
          id={showPassword ? "hidePassword" : "showPassword"}
          type="button"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide Password" : "Show Password"}
        >
          {showPassword ? "Hide " : "Show "}Password
        </button>
      )}
    </div>
  );
};

export default FormInput;

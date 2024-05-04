import {useState} from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const {label, errorMessage, onChange, id, name, type, ariaLabel, ...inputProps} = props;

  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

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
        aria-invalid={focused}
        type={showPassword ? "text" : type}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span id={name}>
        {errorMessage}
      </span>
      {type === "password" && (
        <button
          id={showPassword ? "hidePassword" : "showPassword"}
          name={showPassword ? "hidePassword" : "showPassword"}
          aria-label={showPassword ? "Hide Password" : "Show Password"}
          aria-pressed={showPassword}
          tabIndex="0"// for Safari
          type="button"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide " : "Show "}Password
        </button>
      )}
    </div>
  );
};

export default FormInput;

import {useState} from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      label: "Email:",
      type: "email",
      ariaLabel: "Enter Your Email Address",
      placeholder: "e.g. john_doe@mail.com",
      errorMessage: "It should be a valid email address!",
      required: true,
      autoFocus: true,
    },
    {
      id: 2,
      name: "password",
      label: "Password:",
      type: "password",
      ariaLabel: "The password must be between 8 and 20 characters and contain at least 1 letter, 1 digit and 1 special character",
      placeholder: "enter your password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "username",
      label: "Username:",
      type: "text",
      ariaLabel: "The username must be between 3 and 16 characters long and must not contain any special characters",
      placeholder: "e.g. John",
      errorMessage:
        "Username should be 3-16 characters and should not include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit} autoComplete="on">
        <h1>Registration Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button
          id="register"
          type="submit"
          aria-label="Register"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default App;

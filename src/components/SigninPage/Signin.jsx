import React, { useState } from "react";
import TextInput from "../CustomInputs/CustomInputs";
import CustomButton from "../CustomButtons/CustomButton";
import "../SigninPage/Signin.css";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [textValue, setTextValue] = useState({
    email: "",
    password: "",
  });

  const inputHandleChange = (name, value) => {
    setTextValue((prev) => ({ ...prev, [name]: value }));
  };

  const getemail = localStorage.getItem("email");
  const getpassword = localStorage.getItem("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textValue.email === getemail && textValue.password === getpassword) {
      setTextValue({
        email: "",
        password: "",
      });
      navigate("/home");
    }
  };

  return (
    <div className="signinContainer">
      <form className="signInform" onSubmit={handleSubmit}>
        <TextInput
          type="email"
          value={textValue.user}
          onChange={(value) => inputHandleChange("email", value)}
          placeholder="Email"
        />
        <TextInput
          type="password"
          value={textValue.password}
          onChange={(value) => inputHandleChange("password", value)}
          placeholder="Password"
        />
        <CustomButton label="Sign In" backgroundColor="#e3e3e3" />
      </form>
    </div>
  );
}

export default Signin;

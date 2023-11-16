import React, { useState } from "react";
import TextInput from "../CustomInputs/CustomInputs";
import CustomButton from "../CustomButtons/CustomButton";
import googleLogo from "../../Images/goolgebgr.png";
import facebookLogo from "../../Images/facebooklogo.png";
import "./Signup.css";
import FacebookBtn from "../FacebookBtn/FacebookBtn";
import Googlebtn from "../GoogleBtn/Googlebtn";
import { useNavigate } from "react-router-dom";

function Signup() {
 
  
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState({
    user: "",
    email: "",
    password: "",
    conformPassword: "",
  });
  console.log(textValue)
  
  const inputHandleChange = (name, value) => {
    setTextValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textValue.password !== textValue.conformPassword) {
      alert("Password and Conform Password should be match");
    } else {
      
      localStorage.setItem("name", textValue.user);
      localStorage.setItem("email", textValue.email);
      localStorage.setItem("password", textValue.password);
      setTextValue({ user: "", email: "", password: "", conformPassword: "" });
      navigate("/signin");
    }
  };

  return (
    <div className="container">
      <h1 className="head">Create Account</h1>
      <div className="wrapper">
        <form className="textContainer" onSubmit={handleSubmit}>
          <TextInput
            type="text"
            value={textValue.user}
            onChange={(value) => inputHandleChange("user", value)}
            placeholder="User Name"
          />

          <TextInput
            type="email"
            value={textValue.email}
            onChange={(value) => inputHandleChange("email", value)}
            placeholder="Email"
          />

          <TextInput
            type="password"
            value={textValue.password}
            onChange={(value) => inputHandleChange("password", value)}
            placeholder="Password"
          />
          <TextInput
            type="password"
            value={textValue.conformPassword}
            onChange={(value) => inputHandleChange("conformPassword", value)}
            placeholder="Conform Password"
          />

          <CustomButton label="Sign Up" backgroundColor="#e3e3e3" />
        </form>

        <div className="btnContainer">
          <div className="googlebtnContainer">
            <div className="googlelogoContainer">
              <img className="googlelogo" alt="" src={googleLogo} />
            </div>
            <Googlebtn />
          </div>

          <div className="facebookBtnContainer">
            <div className="facebooklogoContainer">
              <img className="facebooklogo" alt="" src={facebookLogo} />
            </div>
            <FacebookBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

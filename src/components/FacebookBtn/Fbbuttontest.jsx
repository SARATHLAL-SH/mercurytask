import React from "react";
import FacebookLogin from "react-facebook-login";

const Fbbuttontest = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="facebookBtnContainer">
      <FacebookLogin
        appId="695763262272394"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default Fbbuttontest;
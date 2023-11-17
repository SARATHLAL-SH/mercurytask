import React from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLogin } from "react-facebook-login";
import ReactFacebookLogin from "react-facebook-login";

const FacebookBtn = () => {
  return (
    <div className="facebookBtnContainer">
      <LoginSocialFacebook
        appId="695763262272394"
        onResolve={(res) => {
          console.log(res);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <FacebookLoginButton style={{ width: "320px" }} />
      </LoginSocialFacebook>
      
    </div>
  );
};

export default FacebookBtn;

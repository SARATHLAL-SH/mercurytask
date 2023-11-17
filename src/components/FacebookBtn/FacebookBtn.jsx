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
      {/* <FacebookLogin
  appId="1088597931155576"
  onSuccess={(response) => {
    console.log('Login Success!', response);
  }}
  onFail={(error) => {
    console.log('Login Failed!', error);
  }}
  onProfileSuccess={(response) => {
    console.log('Get Profile Success!', response);
  }}
/> */}
    </div>
  );
};

export default FacebookBtn;

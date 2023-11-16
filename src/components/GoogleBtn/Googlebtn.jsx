import React from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";

function Googlebtn() {
  return (
    
      <LoginSocialGoogle
        provider="google"
        client_id="117478157521-iklakmrgqglf0rpadm6o9jek9agv8kkk.apps.googleusercontent.com"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={({ err }) => {
          console.log(err);
        }} 
      >
        <GoogleLoginButton style={{ width: '320px'}} />
      </LoginSocialGoogle>
   
  );
}

export default Googlebtn;

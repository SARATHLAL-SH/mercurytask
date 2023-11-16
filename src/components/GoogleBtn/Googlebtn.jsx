import React from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import GoogleLogin from "react-google-login";

function Googlebtn() {
  const responseGoogle = (response) => {
    console.log(response);

    // Extract user details from the response object
    const { profileObj, tokenId } = response;
    const { email, familyName, givenName, googleId, imageUrl, name } = profileObj;
    console.log('Email:', email);
    console.log('Given Name:', givenName);
    console.log('Family Name:', familyName);
    console.log('Google ID:', googleId);
    console.log('Image URL:', imageUrl);
    console.log('Full Name:', name);
    console.log('Token ID:', tokenId);
  }
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

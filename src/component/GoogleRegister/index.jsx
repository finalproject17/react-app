import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import  jwt_decode  from "jwt-decode";
import React from 'react'

const clientId =
  "906778861627-9kpeu1rhosn95kaaml7efrf5a9k3spl8.apps.googleusercontent.com";

export default function GoogleRegister() {

  const onSuccess = (response) => {
    // const credatioalRes = jwt_decode(response.credential);
    // console.log(credatioalRes);
    console.log("Login Success:", response.profileObj);
  };

  const onFailure = (response) => {
    console.log("Login Failed:", response);
  };
  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
      </GoogleOAuthProvider>
    </div>
  );
}

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import React from "react";
import { client } from "../client";
// import { client } from "../client";
import jwt_decode from "jwt-decode";
import logo from "../assets/logowhite.png";
import shareVideo from "../assets/share.mp4";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    const decodedCredentials = jwt_decode(response.credential);
    console.log(decodedCredentials, "==");
    localStorage.setItem("user", JSON.stringify(decodedCredentials));
    const { name, sub, picture } = decodedCredentials;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <GoogleOAuthProvider clientId='548050478757-38tjh1tofh5vatmlm1uk3cgr1qq8ob7q.apps.googleusercontent.com'>
      <div className='flex justify-start items-center flex-col h-screen'>
        <div className=' relative w-full h-full'>
          <video
            src={shareVideo}
            type='video/mp4'
            loop
            controls={false}
            muted
            autoPlay
            className='w-full h-full object-cover'
          />

          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay'>
            <div className='p-5'>
              <img
                src={logo}
                width='130px'
              />
            </div>

            <div className='shadow-2xl'>
              <GoogleLogin
                // clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                // render={(renderProps) => (
                //   <button
                //     type='button'
                //     className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                //     onClick={renderProps.onClick}
                //     disabled={renderProps.disabled}>
                //   </button>
                // )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                // cookiePolicy='single_host_origin'
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

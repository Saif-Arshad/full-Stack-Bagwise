"use client"

import React from 'react';
import {useGoogleOneTapLogin} from 'react-google-one-tap-login';

const GoogleLogIn = () => {

  useGoogleOneTapLogin({
    onSuccess:(response)=>console.log(response),
    onError:(error)=>console.log(error),
    googleAccountConfigs:{
      client_id:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ,
        context:"signin"
    }
  })


  return null; 
};

export default GoogleLogIn;

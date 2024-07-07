/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from 'react';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';

const GoogleSignUp = () => {
  if (typeof window !== 'undefined') {
    useGoogleOneTapLogin({
      onSuccess: (response) => console.log(response),
      onError: (error) => console.log(error),
      googleAccountConfigs: {
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        context: "signup",
      },
    });
  }

  return null; 
};

export default GoogleSignUp;

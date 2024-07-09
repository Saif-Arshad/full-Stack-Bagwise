"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';

const useGoogleOneTapLogin = dynamic(() => 
  import('react-google-one-tap-login').then(mod => mod.useGoogleOneTapLogin), 
  { ssr: false }
);

const GoogleLogIn = () => {
  const loginWithGoogle = async (response) => {
    try {
      const loginGoogle = await fetch("/api/google/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ response }),
      });
      const res = await loginGoogle.json();

      // You can handle the response here if needed
      console.log("🚀 ~ loginWithGoogle ~ res:", res);
    } catch (error) {
      toast.error("Error in login with Google, please try later");
      console.log(error);
    }
    console.log("🚀 ~ loginWithGoogle ~ response:", response);
  };

  useGoogleOneTapLogin({
    onSuccess: loginWithGoogle,
    onError: () => toast.error("Error in login with Google, please try later"),
    googleAccountConfigs: {
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      context: "signin"
    }
  });

  return null;
};

export default GoogleLogIn;

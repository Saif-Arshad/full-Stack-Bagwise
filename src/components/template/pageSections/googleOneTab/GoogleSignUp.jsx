/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';

const useGoogleOneTapLogin = dynamic(() => 
  import('react-google-one-tap-login').then(mod => mod.useGoogleOneTapLogin), 
  { ssr: false }
);

const GoogleSignUp = () => {
  const registerWithGoogle = async (response)=>{
    try{
    const signUpGoogle = await fetch("/api/google/signup",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({response:response}),
    })
    const res = await signUpGoogle.json()
    console.log("🚀 ~ registerWithGoogle ~ response:", res)
  }
  catch(error){
    console.log(error)
  }
}

  
    useGoogleOneTapLogin({
      onSuccess: registerWithGoogle,
      onError: (error) => toast.error("Error in login with Google, please try later"),
      googleAccountConfigs: {
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        context: "signup",
      },
    });
    return null; 
  }


export default GoogleSignUp;

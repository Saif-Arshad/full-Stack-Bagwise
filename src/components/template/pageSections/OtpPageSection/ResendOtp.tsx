"use client"

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

function ResendOtp() {
  const [timer, setTimer] = useState<number>(40);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const getToken = () => {
    return localStorage.getItem("bagwise_token");
  };
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isDisabled]);

  useEffect(() => {
    if (timer === 0) {
      setIsDisabled(false);
      setTimer(50);
    }
  }, [timer]);

  const handleClick = async() => {
    setIsDisabled(true);
    const token = getToken();
  

      try {
        const verifyRequest = await fetch("/api/user/resend_otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
          }),
        })
        const response =await verifyRequest.json()
        console.log("🚀 ~ otpSubmitHandler ~ response:", response)
        if(response.success){
          toast.success(response.message)
         return 
        }
        if(response.error){
          toast.error(response.error.message)
        }
      } catch (error) {
          console.log(error)
      }
  
  };

  return (
    <button
      type="button"
      className={`px-3 py-2 text-sm font-medium text-center rounded ${isDisabled ? 'text-gray-500 cursor-not-allowed' : 'text-black hover:text-gray-700'}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isDisabled ? `Request Again (00:00:${timer.toString().padStart(2, '0')})` : 'Request Again'}
    </button>
  );
}

export default ResendOtp;

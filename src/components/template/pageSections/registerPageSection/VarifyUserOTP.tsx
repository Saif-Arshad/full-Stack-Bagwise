import React from 'react'
import { useSelector } from 'react-redux';

function VarifyUserOTP() {
  const {isLoading,isError} = useSelector((state: any) => state.createUser);

  return (
    isLoading ? (
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
        Loading...
      </div>
    ) :
    isError ? (
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
        Something went wrong
    </div>
    )
    : (
      <>
        <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg  dark:bg-black dark:text-gray-200">
          <h1 className="text-2xl font-semibold text-center mb-6">Verify OTP Code</h1>
       <input type="text" 
       placeholder='30381'
          className=' p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 outline-none w-72 border border-slate-200'
      
       />
          <div className="flex items-center flex-col justify-between mb-6">
            <p className="text-gray-600 text-sm">Didnt receive code?</p>
              <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-black">Request Again (00:00:36)</button>
          </div>
          <button className="bg-black mr-4 w-full flex items-center justify-center dark:bg-[#424245] text-white font-semibold  gap-x-1  p-2 rounded-md mt-5">Verify
Account

          </button>
        </div>
      </>
    )
  );
}

export default VarifyUserOTP;

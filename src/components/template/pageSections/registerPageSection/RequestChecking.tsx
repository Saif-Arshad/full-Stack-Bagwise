import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';
function RequestChecking() {
    const { isLoading, isError } = useSelector((state: any) => state.createUser);
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
      ) :	
      (
        <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
        Request pohanch gyi a
        <Link href="/verify-account">
        verify
        </Link>
      </div>
      )
  )
}

export default RequestChecking

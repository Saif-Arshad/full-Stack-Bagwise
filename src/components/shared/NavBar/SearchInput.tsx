import React from 'react'

function SearchInput() {
  return (
    <>
      <div className="relative flex items-center w-full h-12 rounded-xl focus-within:shadow-md bg-slate-100 dark:bg-[#101011] overflow-hidden">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input className="peer h-full w-full dark:text-gray-300 outline-none text-sm bg-slate-100 dark:bg-[#101011] text-gray-900 pr-2" type="text" id="search" placeholder="Search something.." /> 
    </div>
    
    </>
  )
}

export default SearchInput

import React from 'react'

function CategoryTable() {
  const tableHeader=[
    {
      name:"id"
    },
    {
      name:"Name"
    },
    {
      name:"Actions"
    },
  ]


  return (
   <>
   
   
<div>

  <div className="my-4 mt-10">
    <label htmlFor="table-search" className="sr-only">Search</label>
    <div className="relative mt-1 flex items-center">
      <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="text" id="table-search" className="block py-2 ps-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg w-80 bg-gray-50 focus:border-slate-300 dark:focus:border-black  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search Categories" />
    </div>
  </div>
<div className="relative overflow-x-auto border-2 border-slate-200 rounded-xl dark:border-[#2222]">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
       {
        tableHeader.map((item:any,index:any)=>(
          <th scope="col" className="px-6 py-3" key={index}>
         {item.name}
        </th>
        ))
       }
     
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Apple MacBook Pro 17
        </th>
        <td className="px-6 py-4">
          Silver
        </td>
        <td className="px-6 py-4">
          Laptop
        </td>
        <td className="px-6 py-4">
          $2999
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">
          White
        </td>
        <td className="px-6 py-4">
          Laptop PC
        </td>
        <td className="px-6 py-4">
          $1999
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
       
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Magic Mouse 2
        </th>
        <td className="px-6 py-4">
          Black
        </td>
        <td className="px-6 py-4">
          Accessories
        </td>
        <td className="px-6 py-4">
          $99
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Apple Watch
        </th>
        <td className="px-6 py-4">
          Silver
        </td>
        <td className="px-6 py-4">
          Accessories
        </td>
        <td className="px-6 py-4">
          $179
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
     
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          iPad
        </th>
        <td className="px-6 py-4">
          Gold
        </td>
        <td className="px-6 py-4">
          Tablet
        </td>
        <td className="px-6 py-4">
          $699
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
 
    </tbody>
  </table>
</div>
</div>


   </>
  )
}

export default CategoryTable

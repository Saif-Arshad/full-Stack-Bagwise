import React from 'react'

function UserProfileSetUp() {
  return (
<div className="flex flex-wrap  shadow rounded-lg p-3 dark:bg-gray-600">
  <div className="flex flex-col gap-2 w-full border-gray-400">
    <div>
      <label className="text-gray-600 dark:text-gray-400">User
        address
      </label>
      <input className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100" type="text" />
    </div>
    <div>
      <label className="text-gray-600 dark:text-gray-400">User
        Image
      </label>
      <input className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100" type="file" />
    </div>

 
  </div>
</div>

  )
}

export default UserProfileSetUp

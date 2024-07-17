import React from 'react'
function MainLoader() {
  return (
    <div className='fixed top-0 z-50 left-0 bg-[#000000a3] flex items-center justify-center w-full h-full'>
      <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-white"></div>
    </div>
  )
}

export default MainLoader
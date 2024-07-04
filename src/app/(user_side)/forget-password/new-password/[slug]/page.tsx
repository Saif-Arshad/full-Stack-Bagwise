import NewPassword from '@/components/template/pageSections/forgetPasswordPageSection/NewPassword'
import React from 'react'

function page({params}:any) {
  console.log("🚀 ~ page ~ params:", params)
  
  return (
  <NewPassword/>
  )
}

export default page

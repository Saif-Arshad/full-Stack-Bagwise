import NewPassword from '@/components/template/pageSections/forgetPasswordPageSection/NewPassword'
import React from 'react'

function page({params}:any) {
  const {slug} = params
  

  

  return (
  <NewPassword slug={slug}/>
  )
}

export default page

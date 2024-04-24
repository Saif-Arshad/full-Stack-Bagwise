import React from 'react'
import Image from 'next/image'
import logoLight from '../../../../public/Images/Logo/light.png'
import logoDark from '../../../../public/Images/Logo/Dark.png'

function Logo() {
  return (
    <Image
    src={logoLight}
    className="h-9 object-cover mt-3"
    alt="Omni Logo"
    height={150}
    width={130}
  />
  )
}

export default Logo

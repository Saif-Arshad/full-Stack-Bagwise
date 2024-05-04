"use client"

import React from 'react'
import styled from ''

import { globalImage } from '../../../../../public/IMAGES'

const mainNav = styled.nav`
display:flex;

` 
const logoImage = styled.img`
width:100px;
height:100px;
`

function Nav() {
  return (
    <mainNav>
      <logoImage src={globalImage.logo} alt="logo" ></logoImage>

    </mainNav>

  )
}

export default Nav

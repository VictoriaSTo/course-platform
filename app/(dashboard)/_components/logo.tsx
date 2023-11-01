import Image from "next/image";

import React from 'react'

const Logo = () => {
  return (
    <Image height={30} width={30} alt="logo" src="/logo.svg" />
  )
}

export default Logo;

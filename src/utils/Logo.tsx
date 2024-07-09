import Image from 'next/image'
import logo from "../../public/icons/logo.png";
import React from 'react'

const Logo = () => {
  return (
    <>
      <Image
        src={logo}
        alt="Sylla Ibrahim"
        width={70}
        height={70}
        className="object-contain"
      />
    </>
  );
}

export default Logo
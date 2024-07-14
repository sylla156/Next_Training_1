import Image from 'next/image'
import logo from "../../public/icons/logo.svg";
import React from 'react'

const Logo = () => {
  return (
    <>
      <Image
        src={logo}
        alt="Sylla Ibrahim"
        width={100}
        className="object-contain"
      />
    </>
  );
}

export default Logo
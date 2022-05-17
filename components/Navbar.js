import React from "react";
import Link from "next/link";
import Image from 'next/image'
import wcLogo from '../src/images/wc-logo.svg'
import style from "../styles/Layout.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className="h-24 grid grid-cols-4 text-lg md:text-2xl text-gray-600 font-medium p-1 md:px-12 shadow-lg w-full">
        <div className="col-span-4 flex justify-evenly md:px-3 py-2 items-center">
          <Link href="/">
            <a className="hover:text-black">Github</a>
          </Link>
          <Link href="/">
            <a className="hover:text-black">Docs</a>
          </Link>
          <div className='w-14 md:w-28'>
          {/* <Link href='/'>
          <Image src={wcLogo} alt='wallet connect logo' />
          </Link> */}
          </div>
         
          <Link href="/">
            <a className="hover:text-black">Wallet</a>
          </Link>
          <Link href="/">
            <a className="hover:text-black">Apps</a>
          </Link>
        </div>
        {/* <div className="col-span-8 md:col-span-2 my-2 flex justify-center items-center">
          <input
            className="rounded-full border font-light text-sm w-7/10 border-gray-200 py-1 px-4 focus:outline-none"
            type="search"
            placeholder="search wallet"
          />
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import Image from 'next/image'
import discord from '../src/images/discord.svg'
import twitter from '../src/images/twitter.svg'
import github from '../src/images/github.svg'
function Footer() {
  return (
    <div className="md:w-5/10 mx-auto md:p-20 text-xl text-gray-700 flex items-center capitalize justify-around">
        <div className='flex items-center'>
          <Image src={discord} alt=''/>
          <div className='mx-2'>discord</div>
        </div>
        <div className='flex items-center'>
          <Image src={twitter} alt='' />
          <div className='mx-2'>twitter</div>
        </div>
        <div className='flex items-center'>
          <Image src={github} alt='' />
          <div className='mx-2'>github</div>
        </div>
    </div>
  );
}

export default Footer;

import React from "react";
import Image from 'next/image'
import bnb from '../src/images/bnb.svg'
import busd from '../src/images/busd.svg'
import eth from '../src/images/eth.svg'
import theta from '../src/images/theta.svg'
import trx from '../src/images/trx.svg'
import atom from '../src/images/atom.svg'
import mew from '../src/images/mew.svg'
import meta from '../src/images/meta.svg'
import coin from '../src/images/coin.svg'
import stellar from '../src/images/stellar.svg'
import pancake from '../src/images/pancake.svg'
import tez from '../src/images/tez.svg'
import xrp from '../src/images/xrp.svg'
import Link from "next/link";

const Morecoins = () => {
    return (
        <div className='grid grid-cols-4 md:grid-cols-7 gap-x-4 -mt-4 mb-3'>
            <Link href='/tabs' passHref>
            <Image src={bnb} alt='' />
        </Link>
      <Link href='/tabs'>
      <Image src={busd} alt='' />
      </Link>
       
        <Link href='/tabs'>
        <Image src={eth} alt='' />
      </Link>
     
        <Link href='/tabs'>
        <Image src={theta} alt='' />
      </Link>
        
        <Link href='/tabs'>
        <Image src={trx} alt='' />
      </Link>
        
        <Link href='/tabs'>
        <Image src={atom} alt='' />
      </Link>
        
        <Link href='/tabs'>
        <Image src={mew} alt='' />
      </Link>
       
        <Link href='/tabs'>
            <Image src={meta} alt='' />
      </Link>
        
        <Link href='/tabs'>
        <Image src={stellar} alt='' />
      </Link>
        
        <Link href='/tabs'>
        <Image src={pancake} alt='' />
      </Link>
        
        <Link href='/tabs'>
        <Image src={tez} alt='' />
      </Link>
        
        <Link href='/tabs'>
        <Image src={xrp} alt='' />
      </Link>
        
        <Link href='/tabs'>
        <Image src={coin} alt='' />
      </Link>
      
        </div>
    )
}

export default Morecoins

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/../public/assets/logo-black.png" alt="The letter J being used as an Icon" width="60" height="50" />
            <div>
                <ul className='hidden md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Works</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
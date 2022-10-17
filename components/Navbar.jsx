import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CgClose, CgMenuRightAlt  } from 'react-icons/cg';
import { useState } from 'react';

const Navbar = () => {
    let Links = [
        {name:"Home", link:"/"},
        {name:"About", link:"/"},
        {name:"Works", link:"/"},
        {name:"Contact", link:"/"},
    ]

    let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-[#f1f3f4] py-4 md:px-10 px-7'>
            <div className='cursor-pointer'>
                <Image src="/../public/assets/logo-black.png" alt="The letter J being used as an Icon" width="60" height="50" />
            </div>

            <div onClick={() => setOpen(!open)} className='text-4xl absolute right-8 top-6 cursor-pointer md:hidden'>
                {open ? <CgClose /> : <CgMenuRightAlt />}
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#f1f3f4] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[490px]'} md:opacity-100`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <Link href={link.link}>
                                <a alt={`${link.name} Page`} className="hover:text-[#7f96bb] duration-300">{link.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}


export default Navbar
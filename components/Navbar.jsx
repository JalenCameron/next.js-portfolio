import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    let Links = [
        {name:"Home", link:"/"},
        {name:"About", link:"/"},
        {name:"Works", link:"/"},
        {name:"Contact", link:"/"},
    ]
    // Creating an Open state in order to have my Navigation menu dynamically appear
    let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <nav className='header md:flex items-center justify-between bg-[#f1f3f4] py-4 md:px-10 px-7'>
            <div className='cursor-pointer'>
                <Image src="/assets/logo-black.png" alt="The letter J being used as an Icon" width="60" height="50" />
            </div>

            <div className='text-4xl absolute right-4 top-4 cursor-pointer md:hidden'>
                <input className="dropdown-button" type="checkbox" id="dropdown-button" onClick={() => setOpen(!open)} />
                <label className="menu-icon" htmlFor="dropdown-button">
                    <span className="hamburger"></span>
                </label>
            </div>

            <ul className={`menu md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#f1f3f4] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[490px]'} md:opacity-100`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-3xl md:my-0 my-7">
                            <Link href={link.link}>
                                <a alt={`${link.name} Page`} className="hover:text-[#7f96bb] duration-300">{link.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}


export default Navbar
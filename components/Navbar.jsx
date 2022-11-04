import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
    const Links = [
        {name:"Home", link:"./"},
        {name:"Works", link:"./works"},
        {name:"About", link:"./about"},
    ]
    // Creating an Open state in order to have my Navigation menu dynamically appear
    const [open, setOpen] = useState(false);

  return (
    <header className='shadow-md w-full fixed top-0 left-0 z-10'>
        <nav className='header md:flex items-center justify-between bg-[#f1f3f4] py-4 md:px-10 px-7'>
            <div className='cursor-pointer'>
                <Link href={"./"}>
                    <Image src="/assets/logo-black.png" alt="The letter J being used as an Icon" width="35" height="35" />
                </Link>
            </div>

            <div className='text-4xl absolute right-4 top-[0.3rem] cursor-pointer md:hidden'>
                <input className="dropdown-button" type="checkbox" id="dropdown-button" onClick={() => setOpen(!open)} />
                <label className="menu-icon" htmlFor="dropdown-button">
                    <span className="hamburger"></span>
                </label>
            </div>

            <ul className={`menu shadow-md sm:shadow-none md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#f1f3f4] md:z-auto z-[-1] left-0 right-0 text-center w-full md:w-auto pl-0 transition-all duration-[400ms] ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-3xl md:text-xl md:my-0 my-7 bg-[#f1f3f4] ">
                            <Link href={link.link}>
                                <a className="cool duration-300">{link.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </header>
  )
}


export default Navbar
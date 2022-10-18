import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {
  return (
    <div className='mt-4 p-4 bottom-0 left-0 w-full flex flex-row justify-between items-center'>
        <p>&copy; Jalen Cameron</p>
        <div className='flex flex-row'>
            <a href="https://www.linkedin.com/in/jalen-esperanza-cameron-5293b0243/" alt="Jalen's LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className='w-6 h-6 mr-2 text-[#7f96bb]' />
            </a>
            <a href="https://github.com/JalenCameron" alt="Jalen's GitHub Account" target="_blank" rel="noopener noreferrer">
                <BsGithub className='w-6 h-6 ml-2 text-[#7f96bb]' />
            </a>
        </div>
    </div>
  )
}

export default Footer
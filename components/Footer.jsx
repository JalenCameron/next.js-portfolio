import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <footer className='mt-4 p-4 bottom-0 left-0 w-full flex flex-row justify-between items-center max-w-3xl mx-auto'>
        <p className='m-0'>&copy; Jalen Cameron</p>
        <div className='flex flex-row'>
            <a href="mailto:jalenccameron@gmail.com">
                <FiMail className='w-6 h-6 mr-2 hover:text-[#7f96bb]' />
            </a>
            <a href="https://www.linkedin.com/in/jalen-cameron" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className='w-6 h-6 mx-2 hover:text-[#7f96bb]' />
            </a>
            <a href="https://github.com/JalenCameron" target="_blank" rel="noopener noreferrer">
                <BsGithub className='w-6 h-6 ml-2 hover:text-[#7f96bb]' />
            </a>
        </div>
    </footer>
  )
}

export default Footer
import Link from 'next/link';
import React from 'react';

function Contact() {
  return (
    <div className='max-w-md mx-auto p-4'>
        <h2 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8 mb-4">
            Get in Touch.
        </h2>
        <div className='flex flex-col justify-center'>
            <Link href="mailto:jalenccameron@gmail.com">
            <a className='bg-[#7f96bb] hover:text-[#343437] border-solid border p-4 w-full text-center mt-6 mb-1 text-[#f1f3f4]'>Contact Me Here</a>
        </Link>
        <Link href="./works">
            <a className='p-4 w-full hover:bg-[#7f96bb] hover:text-[#f1f3f4] text-center mb-6 border border-solid border-[#7f96bb]'>View my other works</a>
        </Link>
        </div>
    </div>
  )
}

export default Contact
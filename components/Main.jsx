import React from 'react'

const Main = () => {
  return (
    <section className='w-full h-screen'>
        <div className='max-w-[1240px] mt-8 w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='text-xl sm:text-2xl lg:text-4xl'>Hi, I&apos;m</h1>
                <h1 className='text-[#7f96bb] text-4xl sm:text-5xl lg:text-8xl py-4'>Jalen Cameron</h1>
                <div className='horizontal-line'></div>
                <p className='uppercase text-lg tracking-widest py-4 lg:text-2xl'>Front-End Web Developer</p>
            </div>
        </div>
    </section>
  )
}

export default Main
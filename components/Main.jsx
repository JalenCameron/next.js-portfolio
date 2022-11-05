import React from 'react'

const Main = () => {
  return (
    <section className='w-full mt-[20rem]'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='text-xl tracking-widest sm:text-2xl lg:text-4xl'>Hi, I&apos;m</h1>
                <h2 className='text-[#7f96bb] text-4xl sm:text-5xl lg:text-8xl py-4'>Jalen Cameron</h2>
                <div className='horizontal-line'></div>
                <div className='carousel-wrapper overflow-hidden w-full h-[50px]'>
                  <div className='carousel-mover relative bottom-[0%]'>
                    <div className='w-full h-[50px]'>
                      <p className='uppercase text-lg py-4 lg:text-2xl'>Front-End Web Developer</p>
                    </div>
                    <div className='w-full h-[50px]'>
                        <p className='uppercase text-lg py-4 lg:text-2xl'>UI/UX Designer</p>
                    </div> 
                    <div className='w-full h-[50px]'>
                        <p className='uppercase text-lg py-4 lg:text-2xl'>Wordpress Wizard</p>
                    </div> 
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main
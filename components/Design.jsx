import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { data } from '../pages/data';

function Design() {
  return (
    <div>
        {/* MY PORTFOLIO */}
        <section>
            <div className='container max-w-4xl my-8 p-5 border-2 border-opacity-40 border-solid border-[#7f96bb] md:flex'>
                <div className='max-w-md md:w-full rsp:m-auto'>
                    <Image src="/assets/portfolio.png" alt="Jalen Cameron's Portfolio" width={1200} height={660} layout={"intrinsic"} className='w-full h-auto' />
                </div>
                <div className='relative w-full p-4 cs:ml-[20px]'>
                    <Link href={`/works/${data[3].project}`}>
                        <a className='see-more fl:float-right mt-4 flex relative'>
                            <p className='relative font-bold tracking-wide'>See More</p>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[24px] relative top-0'><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero"/></svg>
                        </a>
                    </Link>
                    <div className='project-info'>
                        <h3 className='my-3 mr-1'>{data[3].title}</h3>
                        <p className='my-2 font-bold'>{data[3].tools}</p>
                        <p>{data[3].overview}</p>
                    </div>
                </div>
            </div>
        </section>
        {/* NOMI MOVIE DATABASE */}
        <section>
            <div className='container max-w-4xl my-8 p-5 border-2 border-opacity-40 border-solid border-[#7f96bb] md:flex'>
                <div className='max-w-md md:w-full rsp:m-auto'>
                    <Image src="/assets/nomi-movies.png" alt="Nomi Movie Database" width={1200} height={660} layout={"intrinsic"} className='w-full h-auto' />
                </div>
                <div className='relative w-full p-4 cs:ml-[20px]'>
                    <Link href={`/works/${data[0].title}`}>
                        <a className='see-more fl:float-right mt-4 flex relative'>
                            <p className='relative font-bold tracking-wide'>See More</p>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[24px] relative top-0'><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero"/></svg>
                        </a>
                    </Link>
                    <div className='project-info'>
                        <h3 className='my-3 mr-1'>{data[0].title}</h3>
                        <p className='my-2 font-bold'>{data[0].tools}</p>
                        <p>{data[0].overview}</p>
                    </div>
                </div>
            </div>
        </section>
        {/* WEATHER APPLICATION */}
        <section>
            <div className='container max-w-4xl my-8 p-5 border-2 border-opacity-40 border-solid border-[#7f96bb] md:flex'>
                <div className='max-w-md md:w-full rsp:m-auto'>
                    <Image src="/assets/weather-app.png" alt="A Weather Application that displays current forecasts" width={1200} height={660} layout={"intrinsic"} className='w-full h-auto' />
                </div>
                <div className='relative w-full p-4 cs:ml-[20px]'>
                    <Link href={`/works/${data[1].title}`}>
                        <a className='see-more fl:float-right mt-4 flex relative'>
                            <p className='relative font-bold tracking-wide'>See More</p>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[24px] relative top-0'><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero"/></svg>
                        </a>
                    </Link>
                    <div className='project-info'>
                        <h3 className='my-3 mr-1'>{data[1].title}</h3>
                        <p className='my-2 font-bold'>{data[1].tools}</p>
                        <p>{data[1].overview}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Design
import React from 'react';
import Capstone from './Capstone';
import Nomi from './Nomi';
import Weather from './Weather';

function Featured() {
  return (
    <div>
        <section className="my-40 mx-[12px] max-w-[900px] p-5 lg:mx-auto text-center">
            <h2 className='font-bold'>Featured Works</h2>
            <Nomi />
            <Weather />
            <Capstone />
        </section>
    </div>
  )
}

export default Featured
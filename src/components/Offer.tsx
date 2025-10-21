import React from 'react'
import Image from 'next/image'
import Countdown from './CountDown'


const Offer = () => {
  return (
    <div className="bg-black h-[700px] flex md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">

      {/* Text container */}
      <div className='flex-1 flex flex-col items-center justify-center text-center gap-6 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fries</h1>
        <p className='text-white xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods
        of empowerment. Quickly pontificate parallel.</p>
        <Countdown/>
        <button className='bg-gray-800 py-2 px-4 hover:bg-gray-700 mt-5 cursor-pointer rounded-xl text-white transition-all duration-500'>Order Now</button>
      </div>

        {/* Image container */}
      <div className='flex-1 relative w-full md:h-full'>
        <Image src='/offerProduct.png' alt='offer' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offer
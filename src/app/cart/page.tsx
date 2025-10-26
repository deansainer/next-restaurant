import React from 'react'
import Image from 'next/image'


const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-gray-800 lg:flex-row'>

      {/* Product Container */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
        {/* Single Item */}
        <div className='flex flex-items justify-between mb-4'>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold '>$79.99</h2>
          <span className='cursor-pointer'>X</span>
        </div>

        <div className='flex flex-items justify-between mb-4'>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold '>$79.99</h2>
          <span className='cursor-pointer'>X</span>
        </div>

        <div className='flex flex-items justify-between mb-4'>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold '>$79.99</h2>
          <span className='cursor-pointer'>X</span>
        </div>

      </div>

      {/* Payment Container */}
      <div className='h-1/2 p-4 bg-gray-200 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2x:gap-6'>
        <div className='flex justify-between'>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>$81.99</span>
        </div>

        <div className='flex justify-between'>
          <span className=''>Service fee</span>
          <span className=''>$0.99</span>
        </div>

        <div className='flex justify-between'>
          <span className=''>Delivery fee</span>
          <span className='text-green-500 font-bold'>FREE!</span>
        </div>

        <hr className='my-2'/>
          <div className='flex justify-between'>
            <span className=''>Total</span>
            <span className='font-bold'>$82.98</span>
          </div>

        <button className='bg-gray-800 text-white p-3 rounded-xl w-1/2 self-end'>Checkout</button>
      </div>

      </div>
  )
}

export default CartPage
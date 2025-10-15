import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CartIcon = () => {
  return (
    <Link className='flex gap-1.5 items-center' href='/cart'>
        <div className='relative w-6 h-6'>
            <Image src='/cart.png' alt='cart' fill/>
        </div>
        <span className='flex justify-center items-center'>Cart (3)</span>
    </Link>
  )
}

export default CartIcon
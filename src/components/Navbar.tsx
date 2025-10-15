import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

  const user = false

  return (
    <div className='h-15 text-gray-800 p-4 flex items-center justify-between border-b-2 pt-2 pb-2'>
     
      {/* Left Links */}
      <div className='hidden md:flex gap-4'>
        <Link href='/'>Homepage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contact</Link>
      </div>

      {/* Logo */}
      <div className='text-xl'>
        <Link href={'/'}>
        Massimo
        </Link>
      </div>

      <div className='md:hidden'>
        <Menu/>
      </div>
      
      {/* Right Links */}
      <div className='hidden md:flex gap-4 flex items-center'>
        <div className='flex justify-center items-center gap-2 cursor-pointer bg-gray-800 text-white rounded-lg px-2 py-1'>
          <Image src='/phone.png' alt='image' width={20} height={20}/>
          <span className=''>+47 857 262 487</span>
        </div>
        {!user? (
        <Link className='flex justify-center items-center' href='/'>Login</Link>
      ) : (
        <Link className='flex justify-center items-center' href='/orders'>Orders</Link>
      )}

      <CartIcon/>

      </div>

    </div>
  )
}

export default Navbar
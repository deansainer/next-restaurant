'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'


const Menu = () => {
    const [open, setOpen] = useState(false)
    const user = true

    function handleOnClick (){
        setOpen(!open)
    }

    const links = [
        {id: 1, title: 'Homepage', url: '/'},
        {id: 2, title: 'Menu', url: '/menu'},
        {id: 3, title: 'Working Hours', url: '/'},
        {id: 4, title: 'Contact', url: '/'},
        
    ]

  return (
    <div>
        {!open ? (
            <Image className='cursor-pointer' src='/open.png' alt='open' width={20} height={20} onClick={handleOnClick}/>
        ):(
        <Image className='cursor-pointer' src='/close.png' alt='close' width={20} height={20} onClick={handleOnClick}/>
        )}

        {}
        {open && (<div className='bg-gray-800 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col w-full justify-center gap-8 items-center text-3xl z-10'>
            {links.map(item => (
                <Link href={item.url}>{item.title}</Link>
            ))}

            {!user ? (<Link href='/login'>Login</Link>) : (
            <Link href='/orders'>Orders</Link>)
            }

            <Link href='/cart'>
                <CartIcon/>
            </Link>

        </div>
        )}

    </div>
  )
}

export default Menu
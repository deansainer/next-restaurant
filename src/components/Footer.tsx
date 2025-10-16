import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-gray-800 flex justify-between items-center'>
      <Link href='/' className='font-bold tex-xl'>Massimo</Link>
      <p>All rights reserved.</p>
    </div>
  )
}

export default Footer
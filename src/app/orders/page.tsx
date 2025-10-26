import React from 'react'

const Orders = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-12rem)]'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr className='text-sm md:text-base bg-red-100'>
            <td className='hidden md:block py-6 px-1'>12412</td>
            <td className='py-6 px-1'>19.10.2025</td>
            <td className='py-6 px-1'>$54.99</td>
            <td className='hidden md:block py-6 px-1'>Pizza Salami, Coca Cola 1L, Burger Menu</td>
            <td className='py-6 px-1'>On the way (approx. 10min)</td>
          </tr>

          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>12412</td>
            <td className='py-6 px-1'>19.10.2025</td>
            <td className='py-6 px-1'>$44.99</td>
            <td className='hidden md:block py-6 px-1'>Pizza Salami, Coca Cola 1L, Burger Menu</td>
            <td className='py-6 px-1'>Delivered</td>
          </tr>

          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>12412</td>
            <td className='py-6 px-1'>19.10.2025</td>
            <td className='py-6 px-1'>$78.99</td>
            <td className='hidden md:block py-6 px-1'>Pizza Salami, Coca Cola 1L, Burger Menu</td>
            <td className='py-6 px-1'>Delivered</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Orders
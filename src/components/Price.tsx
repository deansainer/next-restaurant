'use client'

import { useEffect, useState } from "react";

type ProductProps = {
    price: number,
    id: number,
    options?: {title: string; additionalPrice: number}
}

const Price = ({price, id, options}: ProductProps) => {

    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
    }, [quantity, selected, options, price])


  return (
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>

        {/* Options */}
        <div className="flex gap-5">
            {options?.map((option, index) => (
                <button className="p-2 ring-1 ring-gray-800 rounded-1xl min-w-[7rem] cursor-pointer transition-all duration-500" 
                style={{background: selected===index ? "var(--color-gray-800)" : "white", color: selected === index ? 'white' : 'black'}} 
                key={option.title} onClick={() => setSelected(index)}>{option.title}</button>
            ))}
            
        </div>

        <div className='flex justify-between items-center'>
            
        {/* Quantity and button */}
            <div className='flex justify-between w-full p-3 ring-1'>
                <span>Quantity</span>
                <div className="flex gap-4 items-center">
                    <button onClick={()=> setQuantity(prev => (prev > 1 ? prev-1 : 1))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={()=> setQuantity(prev => (prev < 9 ? prev+1 : 9))}>{'>'}</button>
                </div>
            </div>

            {/* Cart Button */}
            <button className=" w-58 uppercase bg-gray-800 text-white p-3 ring-1 ring-gray-800">Add to Cart</button>
            </div>
        </div>
  )
}

export default Price
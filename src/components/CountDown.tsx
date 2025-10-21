'use client'
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date('2025-10-25T23:59:59')

const CountdownTimer = () => {
  return (
    <div className='text-yellow-200 font-bold text-4xl md:text-6xl'>
      <Countdown date={endingDate} />
    </div>
  )
}

export default CountdownTimer

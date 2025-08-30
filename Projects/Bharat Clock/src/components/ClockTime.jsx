import React from 'react'
let time = new Date();
const ClockTime = () => {
  return (
    <div><p className='text-2xl font-light'>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p></div>
  )
}

export default ClockTime
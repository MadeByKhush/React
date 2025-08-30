import React from 'react'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import ClockTime from './components/ClockTime'

const App = () => {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'> 
        <div className='flex flex-col items-center gap-2.5'>
          <ClockHeading></ClockHeading>
          <ClockSlogan></ClockSlogan>
          <ClockTime></ClockTime>
        </div>
      </div>
    </>
  )
}

export default App
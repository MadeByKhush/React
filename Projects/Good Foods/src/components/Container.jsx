import React from 'react'

const Container = (props) => {
  return (
    <div className='flex flex-row justify-center items-center gap-15 w-[30rem] h-[30rem] m-24  border-2 rounded-2xl'> {props.children} </div>
  )
}

export default Container
import React from 'react'

const Buttons = ({ btns }) => {

    return (
        <>
            <div className="grid grid-cols-3 gap-5.5 p-[2rem]">


                {
                    btns.map((btns, index) =>
                        (<button key={index} className='border-2 w-[5rem] h-[3rem] cursor-pointer rounded-2xl'> {btns} </button>))
                }
            </div>
        </>
    )
}

export default Buttons
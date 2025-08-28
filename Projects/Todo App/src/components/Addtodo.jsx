import React from 'react'

const Addtodo = () => {
    return (
        <div className='flex flex-row justify-center gap-3'>
            <input type="text" placeholder="Type here" className="input  w-[15rem]" />
            <input type="date" className="input w-[15rem]" />
            <button className="btn btn-soft btn-success w-[5.2rem]">Add</button>
        </div>
    )
}

export default Addtodo
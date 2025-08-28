import React from 'react'

const Todolist = () => {
    return (
        <div className='flex justify-start gap-8 items-center'>
            <div className='w-[15rem] text-start px-[1rem]' >Buy Milk</div>
            <div className='w-[12rem]'>20/08/2025</div>
            <div>
                <button className="btn btn-soft btn-error w-[5.2rem]">Delete</button>
            </div>
        </div>

    )
}

export default Todolist
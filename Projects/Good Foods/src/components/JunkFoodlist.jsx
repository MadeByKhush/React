import React from 'react'

const JunkFoodlist = () => {
    let Junkfood = ["Burger", "Pizza", "Samosa", "Mirchiwada", "Panipuri", "Choumein", "Vadapav"]
    return (

        <div className='text-center'>
            <h1 className='text-3xl mb-2'>Junk Food</h1>
            <ul className='flex flex-col gap-2 justify-center'>
                {
                    Junkfood.map((fooditem) => (
                        <li key={fooditem} className='flex justify-between gap-5'>{fooditem}
                        <button className="btn btn-soft btn-error h-[2rem]" onClick={() => console.log(`You Bought ${fooditem}`)}>Error</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default JunkFoodlist
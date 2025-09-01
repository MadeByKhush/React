import React from 'react'

const FoodList = ({ items }) => {
    // let Fooditems = [];
    //let Fooditems = ["Dal", "Rice", "Chapati", "Ghee", "Paneer", "Roti", "Palak"];
    // if(Fooditems.length === 0)
    // {
    //    return <h3>I'm Still Hungry !</h3>
    // }
    return (
        <div className='text-center'>
            <h1 className='text-3xl mb-2'>Food List</h1>
            {/* {Fooditems.length === 0 ? <h3>I'm Still Hungry !</h3> : null } */}
            <ul className='flex flex-col gap-2 justify-center'>

                {items.map((items) => (
                    <li key={items} className='flex gap-7 justify-between items-center text-center'>{items}
                        <button onClick={() => console.log(`You Bought ${items}`)} className="btn btn-soft btn-info h-[2rem]">Buy</button></li>
                ))}

            </ul>
        </div>
    )
}

export default FoodList
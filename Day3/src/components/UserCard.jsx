import React from 'react'
// import Men from '../assets/Men.png'
import "./UserCard.css"

const UserCard = (props) => {
    return (
        <div className='usercard-container'>
            <img className='image' src={props.image} alt="" />
            <p className='username'>{props.name}</p>
            <p className='usesrname-desc'>{props.description}</p>
        </div>
    )
}

export default UserCard
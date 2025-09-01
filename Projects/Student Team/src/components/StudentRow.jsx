import React from 'react'

const StudentRow = ({ stuName, stuPost }) => {
    return (
        <div  className='flex'>
            <h2>{stuName}</h2>
            <h2>{stuPost}</h2>
        </div>
    )
}

export default StudentRow;
import React from 'react'
import Todolist from './Todolist'

const TodoItemList = ({todoItems}) => {
  return (
    <div className='flex flex-col gap-6'>
      {
      todoItems.map((items) => (
        <Todolist key={todoItems.name} todoName={items.name} todoDate={items.dueDate}></Todolist>
      ))
      }
    </div>
  )
}

export default TodoItemList
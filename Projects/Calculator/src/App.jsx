import React from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'

const App = () => {
  let btns =
      ["7", "8", "9", "÷",
      "4", "5", "6", "×",
      "1", "2", "3", "-",
      "0", ".", "=", "+"];

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>

      <div className='h-[40rem] w-[25rem] border-2 border-b-slate-600 rounded-2xl flex flex-col justify-center items-center gap-9  '>
        <Display></Display>
        <Buttons btns={btns}></Buttons>
      </div>

    </div>
  )
}

export default App
import React from 'react'
import FoodList from './components/FoodList'
import JunkFoodlist from './components/JunkFoodlist'
import Container from './components/Container'

const App = () => {

  let Fooditems = ["Dal", "Rice", "Chapati", "Ghee", "Paneer", "Roti", "Palak"];


  return (
    <div className='flex'>
      <Container>
        <FoodList items={Fooditems}></FoodList>
      </Container>

      <Container>
        <JunkFoodlist></JunkFoodlist>
      </Container>
    </div>


  )
}

export default App
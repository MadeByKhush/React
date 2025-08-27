import React from 'react'
import UserCard from '../src/components/UserCard.jsx'

import maharana from './assets/mahaarana.jpg'
import chhandragupt from './assets/Chandragupt.jpg'
import rana from './assets/ranasanga.jpg'
import suraj from './assets/surajmal.jpg'
import laxmi from './assets/laxmi.jpg'
import shiva from './assets/shivaji.png'


const App = () => {
  return (
    <div className='container'>
      <UserCard name="Maharana Pratap" description="Known for his valor and determination, Maharana Pratap was a Rajput king of Mewar. His battle against the Mughal Empire at the Battle of Haldighati in 1576 remains legendary. Despite facing a much larger Mughal army, Pratap's courage and leadership made him a symbol of resistance." image={maharana} />
      <UserCard name="Chandragupta Maurya" description="Though not strictly from Rajasthan, Chandragupta, the founder of the Maurya Empire, is often associated with Rajput heritage. His rise to power and the establishment of the Mauryan Empire laid the foundation for significant territorial control in the Indian subcontinent." image={chhandragupt} />
      <UserCard name="Rana Sanga" description="Rana Sanga of Mewar fought multiple battles against both the Mughal forces and other Rajput states. His most significant battle was the Battle of Khanwa (1527), where he valiantly opposed Babur but was ultimately defeated." image={rana}/>
      <UserCard name="Maharaja Suraj Mal" description="Suraj Mal was the Jat king of Bharatpur in Rajasthan. He is known for his military expertise, particularly for his resistance against the Mughal Empire and his successful defense of his kingdom against Mughal forces." image={suraj}/>
      <UserCard name="Laxmi Bai (Rani of Jhansi)" description="Though not from Rajasthan, Rani Laxmi Bai’s courage during the Indian Rebellion of 1857 resonated deeply with Rajput warrior spirit. She is often celebrated across Rajasthan as a symbol of fierce resistance against British colonial forces." image={laxmi}/>
      <UserCard name="Shivaji Maharaj" description="Shivaji, though from Maharashtra, is greatly admired in Rajasthan for his military strategies and leadership. He was an astute and brave warrior king, famous for his guerrilla tactics and his staunch resistance against the Mughals." image={shiva} />
    </div>
  )
}

export default App
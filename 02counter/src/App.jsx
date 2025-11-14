import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LushuImage from './assets/Lushu1.jpeg'
import { add } from 'lodash'

function App() {
  
  let [counter, setCounter] = useState(15)
  //let counter = 15
  const addValue = () => {
    //counter = counter + 1 
    setCounter(counter < 20 ? counter + 1 : counter)
    //console.log(counter)
  }

  const removeValue = () => {
    setCounter(counter > 0 ? counter - 1 : counter)
  }

  return (
    <>
     <h1>Bitty Boi ❤️</h1>
     <img src={LushuImage} alt="" height={600} width={300}/>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add Value {counter}</button>
     <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App

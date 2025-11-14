import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {

    username: "Lushu",
    age: 5
  }

  return (
    <>
    <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwind Test</h1>
   <Card someprop= "Lushu" someObject={myObj} btnText="Know More"/>
   <Card someprop = "Peeshu"/>


    </>
  )
}

export default App

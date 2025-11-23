import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("bisque")

  return (
    <>
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

    </div>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button onClick={() => setColor("#d34848")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#d34848"}}>Red</button>

        <button onClick={() => setColor("#20d749")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#20d749"}}>Green</button>
        <button onClick={() => setColor("#0c82e8")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#0c82e8"}}>Blue</button>

        <button onClick={() => setColor("#eed926")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#eed926"}}>Yellow</button>

        <button onClick={() => setColor("#e64eb5")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#e64eb5"}}>Pink</button>

        <button onClick={() => setColor("#c073f3")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#c073f3"}}>Purple</button>

        <button onClick={() => setColor("#efefef")} className='outline-none px-4 py-2 rounded-3xl text-black' style={{backgroundColor: "#efefef"}}>White</button>

        <button onClick={() => setColor("#848484")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#848484"}}>Gray</button>

        <button onClick={() => setColor("#24b0d6")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#24b0d6"}}>Sky</button>

        <button onClick={() => setColor("#ee6737")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#ee6737"}}>Orange</button>

        <button onClick={() => setColor("#b5735b")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor: "#b5735b"}}>Brown</button>
      </div>
    </div>
    </>
  )
}

export default App

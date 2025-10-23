import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return(
    <div>
        <h1>Custom app !</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
)

const anotherString = 'Maisie Lushu'
const correctReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google',
  anotherString
)

createRoot(document.getElementById('root')).render(

    correctReactElement
)

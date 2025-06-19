import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 

function App() {

  const[count,setCount] = useState(10);


  return (
    <>
      <h1>Counter running...</h1>
      <h3>Counter is:{count}</h3>

      <button
        onClick = {() => setCount(count+1)}
      >Add count {count}</button>
      
      <br />

      <button
        onClick = {() => setCount(count-1)}>
          Remove count {count}
        </button>
     
    </>
  )
}

export default App

import { useState } from 'react'
import Button from "@mui/material/Button"
import './App.css'
import Home from './Screens/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App

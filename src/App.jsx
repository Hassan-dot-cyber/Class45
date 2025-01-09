import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const intervel = setInterval(() => {
      setCount(precount => precount + 1)
    }, 1000)
    return ()=> clearInterval(intervel)
  }, [])
  return (
    <div>
      <p>Count :{count}</p>
    </div>
  )
}

export default App

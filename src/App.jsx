import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const intervel = setInterval(() => {
      // setCount(precount => precount + 1)
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(intervel)
  }, [time])
  return (
    <div>
      <p>Count :{time}</p>
    </div>
  )
}

export default App

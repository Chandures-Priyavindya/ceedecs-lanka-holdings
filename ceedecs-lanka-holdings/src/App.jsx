import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-3xl font-bold text-center text-blue-500 bg-gray-100 p-4 rounded-lg shadow-md">
  Hi, Tailwind CSS!
</div>

    </>
  )
}

export default App

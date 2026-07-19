import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <button className="btn btn-primary">Primary</button>
      </div>
  )
}

export default App

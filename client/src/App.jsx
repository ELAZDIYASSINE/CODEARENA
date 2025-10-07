import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    fetch(`${base}/hello`)
      .then((r) => r.json())
      .then((data) => setMessage(data.message || 'Hello CodeArena'))
      .catch(() => setMessage('Hello CodeArena'))
  }, [])

  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <h1>{message}</h1>
    </div>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormikEnvironment } from './pages/FormikEnvironment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormikEnvironment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

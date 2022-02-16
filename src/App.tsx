import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormikEnvironment } from './pages/FormikEnvironment'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormikEnvironment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormikEnvironment } from './pages/FormikEnvironment'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormikEnvironment />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

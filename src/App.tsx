import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormikEnvironment } from './pages/FormikEnvironment'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormikEnvironment />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

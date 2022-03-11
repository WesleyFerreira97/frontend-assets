import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormikEnvironment } from './pages/FormikEnvironment'
import { GlobalStyle } from './styles/global'
import { TextView } from './components/TextView'
import { StyledProvider } from './providers/StyledProvider'

function App() {

	return (
		<>
			<StyledProvider>
				<GlobalStyle />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<FormikEnvironment />} />
						<Route path="/" element={<FormikEnvironment />} />
					</Routes>
				</BrowserRouter>
			</StyledProvider>
		</>
	)
}

export default App

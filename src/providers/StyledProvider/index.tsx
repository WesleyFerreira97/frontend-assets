import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

export function StyledProvider({ children }: any) {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ScreensRoots } from './screens/Root'

import { GlobalStyle } from './css/GlobalStyles'
import { MyThemeProvider } from './providers/ThemeProvider'

export default function App() {
	return (
		<Router>
			<GlobalStyle />
			<MyThemeProvider>
				<ScreensRoots />
			</MyThemeProvider>
		</Router>
	)
}

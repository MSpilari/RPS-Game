import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ScreensRoots } from './screens/Root'

import { GlobalStyle } from './css/GlobalStyles'
import { MyThemeProvider } from './providers/ThemeProvider'
import { ScoreProvider } from './providers/ScoreProvider'

export default function App() {
	return (
		<Router>
			<GlobalStyle />
			<MyThemeProvider>
				<ScoreProvider>
					<ScreensRoots />
				</ScoreProvider>
			</MyThemeProvider>
		</Router>
	)
}

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ScreensRoots } from './screens/Root'

const App = () => {
	return (
		<Router>
			<ScreensRoots />
		</Router>
	)
}

export { App }

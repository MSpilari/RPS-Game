import { createContext, useState } from 'react'

const ScoreContext = createContext(0)

const ScoreProvider = ({ children }) => {
	const [score, setScore] = useState(
		Number(sessionStorage.getItem('currentScore')) || 0
	)

	return (
		<ScoreContext.Provider value={{ score, setScore }}>
			{children}
		</ScoreContext.Provider>
	)
}

export { ScoreProvider, ScoreContext }

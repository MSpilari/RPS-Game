import { gameMode } from '../../../utils/GameMode'

import { ScoreboardWrapper, ScoreWrapper, ScoreText, Score } from './styles'

const Scoreboard = ({ score }) => {
	const currentPath = document.location.pathname

	return (
		<ScoreboardWrapper>
			<img src={gameMode(currentPath)} alt='Game mode' />
			<ScoreWrapper>
				<ScoreText>Score</ScoreText>
				<Score>{score}</Score>
			</ScoreWrapper>
		</ScoreboardWrapper>
	)
}

export { Scoreboard }

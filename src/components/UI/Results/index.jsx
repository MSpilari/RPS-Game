import { useContext, useEffect, useRef, useState } from 'react'

import { RockPaperScissorLogic } from '../../../utils/RockPaperScissors'
import { RockPaperLizardLogic } from '../../../utils/RockPaperLizard'
import { ScoreContext } from '../../../providers/ScoreProvider'

import {
	ResultWrapper,
	TitlesWrapper,
	ConclusionWrapper,
	PlayAgainWrapper,
	PlayAgainButton,
	PlayerButton,
	HouseButton,
	BackHome
} from './styles'

const Results = ({
	playerPick,
	housePick,
	resetPlayerPick,
	resetHousePick
}) => {
	const [result, setResult] = useState('')

	const hasChangedTheResult = useRef(false)

	const { score, setScore } = useContext(ScoreContext)

	const reset = () => {
		resetPlayerPick(null)
		resetHousePick(null)
		sessionStorage.setItem('currentScore', score)
	}

	useEffect(() => {
		!hasChangedTheResult.current &&
			setTimeout(() => {
				document.location.pathname === '/original'
					? setResult(RockPaperScissorLogic(playerPick, housePick))
					: setResult(RockPaperLizardLogic(playerPick, housePick))

				if (result === 'Player Wins') {
					setScore(score + 1)
					hasChangedTheResult.current = true
				} else if (result === 'House Wins') {
					setScore(score - 1)
					hasChangedTheResult.current = true
				}
			}, 300)
	}, [housePick, playerPick, result, score, setScore])

	return (
		<ResultWrapper>
			<TitlesWrapper>
				<h2>You picked</h2>
				<h2>House picked</h2>
			</TitlesWrapper>
			<ConclusionWrapper>
				<PlayerButton
					isTheWinner={result === 'Player Wins'}
					name={playerPick.toLowerCase()}
				/>
				{result !== '' && (
					<PlayAgainWrapper>
						<h1>{result}</h1>
						<PlayAgainButton onClick={() => reset()}>
							Play Again
						</PlayAgainButton>
						<BackHome to='/' onClick={() => reset()}>
							Quit Game
						</BackHome>
					</PlayAgainWrapper>
				)}
				<HouseButton
					isTheWinner={result === 'House Wins'}
					name={housePick.toLowerCase()}
				/>
			</ConclusionWrapper>
		</ResultWrapper>
	)
}

export { Results }

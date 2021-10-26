import { useContext, useEffect, useState } from 'react'

import { Button } from '../Button'
import { RockPaperScissorLogic } from '../../../utils/RockPaperScissors'
import { ScoreContext } from '../../../providers/ScoreProvider'

import {
	ResultWrapper,
	TitlesWrapper,
	ConclusionWrapper,
	PlayAgainWrapper,
	PlayAgainButton
} from './styles'

const Results = ({
	playerPick,
	housePick,
	resetPlayerPick,
	resetHousePick
}) => {
	const [result, setResult] = useState(null)

	const { score, setScore } = useContext(ScoreContext)

	const reset = () => {
		resetPlayerPick(null)
		resetHousePick(null)
	}

	useEffect(() => {
		setTimeout(() => {
			setResult(RockPaperScissorLogic(playerPick, housePick))
		}, 2000)
		if (result === 'Player Wins') setScore(score + 1)
		else if (result === 'House Wins') setScore(score - 1)
	}, [playerPick, housePick, result])

	return (
		<ResultWrapper>
			<TitlesWrapper>
				<h2>You choose</h2>
				<h2>House choose</h2>
			</TitlesWrapper>
			<ConclusionWrapper>
				<Button name={playerPick.toLowerCase()} />
				{result !== null && (
					<PlayAgainWrapper>
						<h1>{result}</h1>
						<PlayAgainButton onClick={() => reset()}>
							Play Again
						</PlayAgainButton>
					</PlayAgainWrapper>
				)}
				<Button name={housePick.toLowerCase()} />
			</ConclusionWrapper>
		</ResultWrapper>
	)
}

export { Results }

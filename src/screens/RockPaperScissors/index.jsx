import { useState, useContext } from 'react'

import { DefaultWrapper } from '../../components/wrappers/Default'
import { Scoreboard } from '../../components/UI/Scoreboard'
import { PlayerChoices } from '../../components/UI/PlayerChoices'
import { PlayerChose } from '../../components/UI/PlayerChose'
import { Footer } from '../../components/UI/Footer'
import { Results } from '../../components/UI/Results'
import { Backdrop } from '../../components/UI/Backdrop'

import { ScoreContext } from '../../providers/ScoreProvider'

import { MainWrapper } from './styles'

const RockPaperScissors = () => {
	const [playerChoice, setPlayerChoice] = useState(null)
	const [houseChoice, setHouseChoice] = useState(null)
	const { score } = useContext(ScoreContext)
	return (
		<DefaultWrapper>
			<Scoreboard score={score} />
			<MainWrapper>
				{playerChoice === null && (
					<PlayerChoices changeStateFunc={setPlayerChoice} />
				)}

				{playerChoice !== null && houseChoice === null && (
					<PlayerChose
						playerPick={playerChoice}
						handleHousePick={setHouseChoice}
					/>
				)}

				{playerChoice !== null && houseChoice !== null && (
					<Results
						playerPick={playerChoice}
						housePick={houseChoice}
						resetHousePick={setHouseChoice}
						resetPlayerPick={setPlayerChoice}
					/>
				)}
			</MainWrapper>
			<Backdrop />
			<Footer />
		</DefaultWrapper>
	)
}

export { RockPaperScissors }

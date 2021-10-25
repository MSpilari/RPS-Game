import { useState } from 'react'

import { DefaultWrapper } from '../../components/wrappers/Default'
import { Scoreboard } from '../../components/UI/Scoreboard'
import { PlayerChoices } from '../../components/UI/PlayerChoices'
import { PlayerChose } from '../../components/UI/PlayerChose'
import { Footer } from '../../components/UI/Footer'
import { MainWrapper } from './styles'

const RockPaperScissors = () => {
	const [playerChoice, setPlayerChoice] = useState(null)
	const [houseChoice, setHouseChoice] = useState(null)
	const [score, setScore] = useState(0)

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
					<>
						<label>{playerChoice}</label>
						<label>Win, Loose or Draw</label>
						<label>{houseChoice}</label>
					</>
				)}
			</MainWrapper>
			<Footer />
		</DefaultWrapper>
	)
}

export { RockPaperScissors }

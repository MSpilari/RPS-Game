import { useContext, useState } from 'react'

import { ScoreContext } from '../../providers/ScoreProvider'
import { DefaultWrapper } from '../../components/wrappers/Default'
import { Scoreboard } from '../../components/UI/Scoreboard'
import { Backdrop } from '../../components/UI/Backdrop'
import { RulesButton } from '../../components/UI/RulesButton'
import { PlayerChoices } from '../../components/UI/PlayerChoices'
import { PlayerChose } from '../../components/UI/PlayerChose'
import { Results } from '../../components/UI/Results'
import { Footer } from '../../components/UI/Footer'

import { MainWrapper } from './styles'

const RockPaperScissorsLizard = () => {
	const [playerChoice, setPlayerChoice] = useState(null)
	const [houseChoice, setHouseChoice] = useState(null)
	const [openBack, setOpenBack] = useState(false)
	const { score } = useContext(ScoreContext)

	return (
		<DefaultWrapper>
			<Scoreboard score={score} />
			<MainWrapper>
				{playerChoice === null && (
					<PlayerChoices bonus changeStateFunc={setPlayerChoice} />
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
			<Backdrop isOpened={openBack} handleOpenBack={setOpenBack} />
			<RulesButton onClick={() => setOpenBack(true)} />
			<Footer />
		</DefaultWrapper>
	)
}

export { RockPaperScissorsLizard }

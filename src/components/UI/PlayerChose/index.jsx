import { useEffect } from 'react'
import { HouseChoice } from '../../../utils/HouseChoice'

import {
	PlayerChoseWrapper,
	FirstTitle,
	SecondTitle,
	PlayerPick,
	HouseShadow
} from './styles'

const PlayerChose = ({ playerPick, handleHousePick }) => {
	useEffect(() => {
		setTimeout(() => {
			const path = document.location.pathname
			handleHousePick(HouseChoice(0, 2, path))
		}, 5000)
	}, [handleHousePick])

	return (
		<PlayerChoseWrapper>
			<FirstTitle>You picked</FirstTitle>
			<SecondTitle>House picked</SecondTitle>
			<PlayerPick name={playerPick.toLowerCase()} />
			<HouseShadow />
		</PlayerChoseWrapper>
	)
}

export { PlayerChose }

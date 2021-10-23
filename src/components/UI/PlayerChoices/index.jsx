import { Button } from '../../UI/Button'
import { PlayerChoicesWrapper } from './styles'

const PlayerChoices = ({ changeStateFunc }) => {
	return (
		<PlayerChoicesWrapper>
			<Button name='rock' onClick={() => changeStateFunc('Rock')} />
			<Button name='paper' onClick={() => changeStateFunc('Paper')} />
			<Button name='scissors' onClick={() => changeStateFunc('Scissors')} />
		</PlayerChoicesWrapper>
	)
}

export { PlayerChoices }

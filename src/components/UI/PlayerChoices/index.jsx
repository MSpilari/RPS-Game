import { Button } from '../../UI/Button'
import { PlayerChoicesWrapper } from './styles'

const PlayerChoices = ({ changeStateFunc, bonus }) => {
	return (
		<PlayerChoicesWrapper>
			<Button name='rock' onClick={() => changeStateFunc('Rock')} />
			<Button name='paper' onClick={() => changeStateFunc('Paper')} />
			<Button name='scissors' onClick={() => changeStateFunc('Scissors')} />
			{bonus && (
				<>
					<Button name='lizard' onClick={() => changeStateFunc('Lizard')} />
					<Button name='spock' onClick={() => changeStateFunc('Spock')} />
				</>
			)}
		</PlayerChoicesWrapper>
	)
}

export { PlayerChoices }

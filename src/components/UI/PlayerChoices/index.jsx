import { Button } from '../../UI/Button'
import RockIcon from '../../../assets/icon-rock.svg'
import PaperIcon from '../../../assets/icon-paper.svg'
import ScissorIcon from '../../../assets/icon-scissors.svg'
import { PlayerChoicesWrapper } from './styles'

const PlayerChoices = ({ changeStateFunc }) => {
	return (
		<PlayerChoicesWrapper>
			<Button
				img={RockIcon}
				name='rock'
				onClick={() => changeStateFunc('Rock')}
			/>
			<Button
				img={PaperIcon}
				name='paper'
				onClick={() => changeStateFunc('Paper')}
			/>
			<Button
				img={ScissorIcon}
				name='scissors'
				onClick={() => changeStateFunc('Scissor')}
			/>
		</PlayerChoicesWrapper>
	)
}

export { PlayerChoices }

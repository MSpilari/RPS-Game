import RockLogo from '../../../assets/icon-rock.svg'
import PaperLogo from '../../../assets/icon-paper.svg'
import ScissorLogo from '../../../assets/icon-scissors.svg'
import LizardLogo from '../../../assets/icon-lizard.svg'
import SpockLogo from '../../../assets/icon-spock.svg'
import { ButtonDiv, ButtonStyled } from './styles'

const Button = ({ name, ...props }) => {
	let img = null

	if (name === 'rock') img = RockLogo
	else if (name === 'paper') img = PaperLogo
	else if (name === 'scissors') img = ScissorLogo
	else if (name === 'lizard') img = LizardLogo
	else img = SpockLogo

	return (
		<ButtonStyled name={name} {...props}>
			<ButtonDiv>
				<img alt={`${name} Logo`} src={img} />
			</ButtonDiv>
		</ButtonStyled>
	)
}

export { Button }

import RPSLogo from '../../assets/logo.svg'
import RPSLSLogo from '../../assets/logo-bonus.svg'
import { DefaultWrapper } from '../../components/wrappers/Default'
import { Footer } from '../../components/UI/Footer'

import { LogosWrapper, Logo, HomeMain, LinkStyled } from './styles'

const HomePage = () => {
	return (
		<DefaultWrapper>
			<LogosWrapper>
				<Logo alt='Rock Paper Scissor Logo' src={RPSLogo} />
				<Logo alt='Rock Paper Scissor Lizard Spock Logo' src={RPSLSLogo} />
			</LogosWrapper>
			<HomeMain>
				<LinkStyled data-testid='original' to='/original'>
					Play Rock Paper Scissors
				</LinkStyled>
				<LinkStyled data-testid='bonus' to='/bonus'>
					Play Rock Paper Scissors Lizard Spock
				</LinkStyled>
			</HomeMain>
			<Footer />
		</DefaultWrapper>
	)
}

export { HomePage }

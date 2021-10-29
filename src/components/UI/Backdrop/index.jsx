import Close from '../../../assets/icon-close.svg'
import RPSRules from '../../../assets/image-rules.svg'
import RPSLSRules from '../../../assets/image-rules-bonus.svg'

import { BackdropWrapper, CloseButton, RulesWrapper } from './styles'

const Backdrop = ({ isOpened }) => {
	const imgUrl =
		document.location.pathname === 'original' ? RPSRules : RPSLSRules

	return (
		<BackdropWrapper>
			<RulesWrapper>
				<CloseButton>
					<img src={Close} alt='Close' />
				</CloseButton>
				<img src={imgUrl} alt='Rules' />
			</RulesWrapper>
		</BackdropWrapper>
	)
}

export { Backdrop }

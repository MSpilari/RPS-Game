import Close from '../../../assets/icon-close.svg'
import RPSRules from '../../../assets/image-rules.svg'
import RPSLSRules from '../../../assets/image-rules-bonus.svg'

import {
	BackdropWrapper,
	CloseButton,
	RulesWrapper,
	ImageRules
} from './styles'

const Backdrop = ({ isOpened, handleOpenBack }) => {
	const imgUrl =
		document.location.pathname === '/original' ? RPSRules : RPSLSRules

	return (
		<BackdropWrapper isOpened={isOpened}>
			<RulesWrapper>
				<CloseButton onClick={() => handleOpenBack(false)}>
					<img src={Close} alt='Close' />
				</CloseButton>
				<ImageRules src={imgUrl} alt='Rules' />
			</RulesWrapper>
		</BackdropWrapper>
	)
}

export { Backdrop }

import styled from 'styled-components'
import RPSBg from '../../../assets/bg-triangle.svg'
import RPSLSBg from '../../../assets/bg-pentagon.svg'

const PlayerChoicesWrapper = styled.section`
	width: 100vw;
	height: 100%;

	max-width: 700px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;

	background: ${() =>
			document.location.pathname === '/bonus'
				? `url(${RPSLSBg})`
				: `url(${RPSBg})`}
		no-repeat center;
	position: relative;

	@media screen and (max-width: 767px) {
		background-size: 305px 277px;
		max-width: 300px;
	}
`

export { PlayerChoicesWrapper }

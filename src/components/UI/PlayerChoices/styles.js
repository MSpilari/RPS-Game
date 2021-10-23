import styled from 'styled-components'
import RPSBg from '../../../assets/bg-triangle.svg'

const PlayerChoicesWrapper = styled.section`
	width: 100%;
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template-areas:
		'a b c'
		'd e f';
	background-image: url(${RPSBg});
	background-repeat: no-repeat;
	background-position: 50% 250%;

	@media screen and (max-width: 570px) {
		background-image: url(${RPSBg});
		column-gap: 20px;
		grid-template-areas:
			'a c'
			'e e';
		background-position: 50% 100%;
		background-size: 230px;
	}
`

export { PlayerChoicesWrapper }

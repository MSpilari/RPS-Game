import styled from 'styled-components'
import { Button } from '../Button'

const PlayerChoseWrapper = styled.section`
	width: 100%;
	height: 223px;
	position: relative;
	align-items: center;
	justify-items: center;

	max-width: 700px;
	margin: 0 auto;

	@media screen and (max-width: 767px) {
		max-width: 300px;
	}
`
const FirstTitle = styled.h2`
	color: white;
	position: absolute;
	inset: 0px 0px 0px 65px;

	@media screen and (max-width: 767px) {
		inset: 0px 0px 0px 10px;
	}
`
const SecondTitle = styled.h2`
	color: white;
	position: absolute;
	inset: 0px 0px 0px 505px;

	@media screen and (max-width: 767px) {
		inset: 0px 0px 0px 163px;
	}
`
const PlayerPick = styled(Button)`
	pointer-events: none;
	inset: 70px 0px 0px 44px;

	@media screen and (max-width: 767px) {
		inset: 65px 0px 0px 4px;
	}
`
const HouseShadow = styled.div`
	width: 180px;
	height: 160px;

	position: absolute;
	inset: 70px 0px 0px 483px;

	background-color: ${({ theme }) => theme.darkText};
	padding: 70px 75px;

	border: 2px solid ${({ theme }) => theme.darkText};
	border-radius: 100%;

	@media screen and (max-width: 767px) {
		width: 140px;
		height: 135px;

		padding: 55px 62px;
		inset: 65px 0px 0px 158px;
	}
`

export { PlayerChoseWrapper, FirstTitle, SecondTitle, PlayerPick, HouseShadow }

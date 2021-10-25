import styled from 'styled-components'
import { Button } from '../Button'

const PlayerChoseWrapper = styled.section`
	width: 100%;
	display: grid;
	grid-template-areas:
		't1 t2'
		'p1 p2';
	align-items: center;
	justify-items: center;
	row-gap: 5px;
`
const FirstTitle = styled.h2`
	grid-area: t1;
	color: white;
`
const SecondTitle = styled.h2`
	grid-area: t2;
	color: white;
`
const PlayerPick = styled(Button)`
	grid-area: p1;
	pointer-events: none;
`
const HouseShadow = styled.div`
	background-color: ${({ theme }) => theme.darkText};
	padding: 70px 75px;
	border-radius: 100%;
	border: 2px solid ${({ theme }) => theme.darkText};
	grid-area: p2;

	@media screen and (max-width: 570px) {
		padding: 55px 62px;
	}
`

export { PlayerChoseWrapper, FirstTitle, SecondTitle, PlayerPick, HouseShadow }

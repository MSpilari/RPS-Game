import styled from 'styled-components'
import { Button } from '../Button'

const ResultWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const TitlesWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	color: white;
`

const ConclusionWrapper = styled.div`
	display: flex;
	width: 70%;
	justify-content: space-around;
	margin: 20px auto;

	@media screen and (max-width: 768px) {
		display: grid;
		width: 100%;
		grid-template-areas:
			'button1 button2'
			'button1 button2'
			'result result'
			'result result';
	}
`

const PlayerButton = styled(Button)`
	grid-area: button1;
	pointer-events: none;
	box-shadow: ${({ theme, name, isTheWinner }) =>
		isTheWinner ? `0 0 50px 60px ${theme[name + 'Single']}` : 'none'};
	transition: linear 0.4s;

	@media screen and (max-width: 768px) {
		box-shadow: ${({ theme, name, isTheWinner }) =>
			isTheWinner ? `0 0 20px 30px ${theme[name + 'Single']}` : 'none'};
	}
`

const HouseButton = styled(Button)`
	grid-area: button2;
	pointer-events: none;
	box-shadow: ${({ theme, name, isTheWinner }) =>
		isTheWinner ? `0 0 50px 60px ${theme[name + 'Single']}` : 'none'};
	transition: linear 0.4s;

	@media screen and (max-width: 768px) {
		box-shadow: ${({ theme, name, isTheWinner }) =>
			isTheWinner ? `0 0 20px 30px ${theme[name + 'Single']}` : 'none'};
	}
`

const PlayAgainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	font-size: 50px;

	@media screen and (max-width: 768px) {
		grid-area: result;
		text-align: center;
	}
`
const PlayAgainButton = styled.button`
	background-color: white;
	border: 2px solid white;
	width: 70%;
	color: ${({ theme }) => theme.darkText};
	text-decoration: none;
	border-radius: 8px;
	text-align: center;
	font-size: 20px;
	padding: 10px 20px;
	cursor: pointer;
	margin: 3px 0;

	&:hover {
		background-color: wheat;
	}
`

export {
	ResultWrapper,
	TitlesWrapper,
	ConclusionWrapper,
	PlayAgainWrapper,
	PlayAgainButton,
	PlayerButton,
	HouseButton
}

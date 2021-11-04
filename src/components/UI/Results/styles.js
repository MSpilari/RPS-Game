import { Link } from 'react-router-dom'
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
	position: unset;

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
	position: unset;

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
	width: 500px;

	h1 {
		font-size: 50px;
	}

	@media screen and (max-width: 768px) {
		grid-area: result;
		text-align: center;
		width: 100%;

		margin-top: 20px;
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
	text-transform: uppercase;

	&:hover {
		background-color: wheat;
	}
`

const BackHome = styled(Link)`
	color: ${({ theme }) => theme.headerOutlineColor};
	border: 2px solid ${({ theme }) => theme.headerOutlineColor};
	padding: 10px 15px;
	text-decoration: none;
	border-radius: 8px;
	font-size: 18px;
	width: 70%;
	text-align: center;
	text-transform: uppercase;

	&:hover {
		color: ${({ theme }) => theme.darkText};
		border: 2px solid ${({ theme }) => theme.darkText};
	}
`

export {
	ResultWrapper,
	TitlesWrapper,
	ConclusionWrapper,
	PlayAgainWrapper,
	PlayAgainButton,
	PlayerButton,
	HouseButton,
	BackHome
}

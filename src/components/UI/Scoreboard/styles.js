import styled from 'styled-components'

const ScoreboardWrapper = styled.header`
	position: absolute;
	top: 10px;

	border: 3px solid ${({ theme }) => theme.headerOutlineColor};
	border-radius: 8px;
	padding: 4px 8px;
	display: flex;
	align-items: center;
	width: 50%;
	margin: 0 auto;
	justify-content: space-between;
	max-width: 700px;

	img {
		height: 80%;
		margin: auto 0;
	}

	@media screen and (max-width: 767px) {
		width: 95%;
		margin: 0 auto;
	}
`

const ScoreWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-color: white;
	border-radius: 8px;

	height: 90px;
	width: 25%;
	max-width: 100px;
`
const ScoreText = styled.p`
	color: ${({ theme }) => theme.scoreText};
	font-weight: 100;
`

const Score = styled.p`
	color: ${({ theme }) => theme.darkText};
	font-size: 50px;
	font-weight: 700;
`

export { ScoreboardWrapper, ScoreWrapper, ScoreText, Score }

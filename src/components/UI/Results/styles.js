import styled from 'styled-components'

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
`

const PlayAgainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	font-size: 50px;
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
	PlayAgainButton
}

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogosWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 50%;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`

const Logo = styled.img`
	height: 80%;
	width: 45%;
	margin: 0 auto;
`

const HomeMain = styled.main`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 65%;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		width: 90%;
		margin: 0 auto;
	}
`

const LinkStyled = styled(Link)`
	color: ${({ theme }) => theme.headerOutlineColor};
	border: 3px solid ${({ theme }) => theme.headerOutlineColor};
	padding: 10px 15px;
	text-decoration: none;
	border-radius: 8px;
	font-size: 18px;

	&:hover {
		color: ${({ theme }) => theme.darkText};
		border: 3px solid ${({ theme }) => theme.darkText};
	}

	@media screen and (max-width: 425px) {
		font-size: 12px;
		padding: 5px 10px;
		display: flex;
		flex-wrap: wrap;
		width: 40%;
		margin: 0 auto;
	}
`

export { LogosWrapper, Logo, HomeMain, LinkStyled }

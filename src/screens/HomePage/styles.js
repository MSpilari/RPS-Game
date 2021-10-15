import styled from 'styled-components'
import { Link } from 'react-router-dom'
const HomeWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`

const LogosWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 50%;
	margin: 0 auto;
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
`

const LinkStyled = styled(Link)`
	color: ${({ theme }) => theme.headerOutlineColor};
	border: 3px solid ${({ theme }) => theme.headerOutlineColor};
	padding: 10px 15px;
	text-decoration: none;
	border-radius: 8px;
	&:hover {
		color: ${({ theme }) => theme.darkText};
		border: 3px solid ${({ theme }) => theme.darkText};
	}
`

export { HomeWrapper, LogosWrapper, Logo, HomeMain, LinkStyled }

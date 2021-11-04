import styled from 'styled-components'

const ButtonStyled = styled.button`
	width: 180px;
	height: 160px;
	padding: 20px 25px;

	position: absolute;
	inset: ${({ name }) => {
		if (document.location.pathname === '/bonus') {
			if (name === 'paper') return '114px 0px 0px 420px'
			else if (name === 'scissors') return '14px 0px 0px 258px'
			else if (name === 'rock') return '285px 0px 0px 367px'
			else if (name === 'lizard') return '285px 0px 0px 163px'
			else if (name === 'spock') return '114px 0px 0px 97px'
		} else {
			if (name === 'paper') return '27px 0px 0px 140px'
			else if (name === 'scissors') return '27px 0px 0px 372px'
			else if (name === 'rock') return '215px 0px 0px 262px'
		}
	}};
	background: ${({ theme, name }) =>
			`radial-Gradient(${theme[name + 'Gradient']})`}
		transparent;

	border: none;
	border-radius: 100%;

	outline: none;
	cursor: pointer;

	box-shadow: 0 10px 0px 0 ${({ theme, name }) => `${theme[name + 'Single']}`};
	transition: linear 0.4s;

	&:hover {
		box-shadow: 0 10px 16px 16px
			${({ theme, name }) => `${theme[name + 'Single']}`};
	}

	@media screen and (max-width: 767px) {
		width: 140px;
		height: 135px;
		padding: 14px 19px;

		inset: ${({ name }) => {
			if (document.location.pathname === '/bonus') {
				if (name === 'paper') return '135px 0px 0px 164px'
				else if (name === 'scissors') return '10px 0px 0px 83px'
				else if (name === 'rock') return '285px 0px 0px 152px'
				else if (name === 'lizard') return '285px 0px 0px 0px'
				else if (name === 'spock') return '135px 0px 0px 0px'
			} else {
				if (name === 'paper') return '27px 0px 0px 3px'
				else if (name === 'scissors') return '27px 0px 0px 165px'
				else if (name === 'rock') return '215px 0px 0px 84px'
			}
		}};
	}
`

const ButtonDiv = styled.div`
	border-radius: 100%;
	background-color: white;
	padding: 25px 35px;
	box-shadow: 0 -7px 0 0 rgba(0, 0, 0, 0.6);

	@media screen and (max-width: 570px) {
		padding: 19px 29px;
	}
`

export { ButtonStyled, ButtonDiv }

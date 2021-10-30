import styled from 'styled-components'

const ButtonStyled = styled.button`
	background-image: ${({ theme, name }) =>
		`radial-Gradient(${theme[name + 'Gradient']})`};
	border: none;
	background-color: transparent;
	outline: none;
	border-radius: 100%;
	padding: 20px 25px;
	cursor: pointer;
	justify-self: center;
	grid-area: ${({ name }) => {
		if (name === 'paper') return 'a'
		else if (name === 'scissors') return 'c'
		else if (name === 'rock') return 'e'
	}};
	box-shadow: 0 10px 0px 0 ${({ theme, name }) => `${theme[name + 'Single']}`};
	transition: linear 0.4s;

	&:hover {
		box-shadow: 0 10px 16px 16px
			${({ theme, name }) => `${theme[name + 'Single']}`};
	}

	@media screen and (max-width: 570px) {
		padding: 14px 19px;
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

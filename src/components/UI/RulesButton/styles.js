import styled from 'styled-components'

const RulesButtonStyled = styled.button`
	background-color: transparent;
	border: 2px solid ${({ theme }) => theme.headerOutlineColor};
	border-radius: 8px;
	padding: 10px 15px;
	cursor: pointer;
	color: ${({ theme }) => theme.headerOutlineColor};
	position: absolute;
	bottom: 60px;
	right: 20px;
	font-size: 18px;

	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`

export { RulesButtonStyled }

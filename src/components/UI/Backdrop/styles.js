import styled from 'styled-components'

const BackdropWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	background-color: rgba(0, 0, 0, 0.4);
	display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
	z-index: 2;
`

const RulesWrapper = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const CloseButton = styled.button`
	background-color: rgba(0, 0, 0, 0.8);
	border: none;
	align-self: flex-end;
	padding: 3px 5px;
`

export { BackdropWrapper, RulesWrapper, CloseButton }

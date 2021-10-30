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
	background-color: rgba(0, 0, 0, 0.2);
	border: none;
	align-self: flex-end;
	padding: 3px 5px;
	cursor: pointer;
	display: flex;
	align-content: center;

	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`

const ImageRules = styled.img`
	width: 480px;
	margin: 0 auto;

	@media screen and (max-width: 767px) {
		width: 280px;
	}
`

export { BackdropWrapper, RulesWrapper, CloseButton, ImageRules }

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
	width: 70%;
	height: 50%;
	margin: auto;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: center;
	background: white;

	max-width: 500px;

	@media screen and (max-width: 767px) {
		width: 90%;
		margin: 0 auto;
	}
`

const CloseButton = styled.button`
	background-color: rgba(0, 0, 0, 0.2);
	border: none;
	align-self: flex-end;
	padding: 3px 5px;
	cursor: pointer;
	display: flex;
	align-content: center;
	margin-right: 10px;

	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`

const ImageRules = styled.img`
	width: 300px;
	margin: 0 auto;

	@media screen and (max-width: 767px) {
		width: 270px;
	}
`

export { BackdropWrapper, RulesWrapper, CloseButton, ImageRules }

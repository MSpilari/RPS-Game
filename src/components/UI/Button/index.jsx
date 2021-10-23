import { ButtonDiv, ButtonStyled } from './styles'

const Button = ({ img, name, ...props }) => {
	return (
		<ButtonStyled name={name} {...props}>
			<ButtonDiv>
				<img alt={`${name} Logo`} src={img} />
			</ButtonDiv>
		</ButtonStyled>
	)
}

export { Button }

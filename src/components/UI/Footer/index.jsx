import { MyFooter } from './styles'
import Logo from '../../../assets/LogoYB.svg'

const Footer = () => {
	return (
		<MyFooter>
			<h6>
				Feito por{' '}
				<a
					href='https://mspilariportfolio.vercel.app/'
					target='_blank'
					rel='noreferrer'
				>
					<img style={{ width: '100px' }} alt='Logo MSpilari' src={Logo} />
				</a>
			</h6>
		</MyFooter>
	)
}

export { Footer }

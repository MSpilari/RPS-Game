import RPSLogo from '../assets/logo.svg'
import RPSLSLogo from '../assets/logo-bonus.svg'

const gameMode = path => {
	return path === '/original' ? RPSLogo : RPSLSLogo
}

export { gameMode }

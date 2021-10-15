import { ThemeProvider } from 'styled-components'

const allColors = {
	scissorsGradient: 'hsl(39, 89%, 49%), hsl(40, 84%, 53%)',
	paperGradient: 'hsl(230, 89%, 62%), hsl(230, 89%, 65%)',
	rockGradient: 'hsl(349, 71%, 52%),hsl(349, 70%, 56%)',
	lizardGradient: 'hsl(261, 73%, 60%), hsl(261, 72%, 63%)',
	spockGradient: 'hsl(189, 59%, 53%), hsl(189, 58%, 57%)',
	darkText: 'hsl(229, 25%, 31%)',
	scoreText: 'hsl(229, 64%, 46%)',
	headerOutlineColor: 'hsl(217, 16%, 45%)'
}

const MyThemeProvider = ({ children }) => {
	return <ThemeProvider theme={allColors}>{children}</ThemeProvider>
}

export { MyThemeProvider }

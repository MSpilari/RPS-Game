import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RockPaperScissors } from '../screens/RockPaperScissors'

describe('Rock Paper Scissor screen tests', () => {
	beforeEach(() => {
		render(<RockPaperScissors />)
	})

	it('Should render the three buttons', () => {
		const firstButton = screen.getByAltText('rock Logo', { selector: 'button' })
		const secondButton = screen.getByAltText('paper Logo')
		const thirdButton = screen.getByAltText('scissors Logo')

		expect(firstButton).toBeInTheDocument()
		expect(secondButton).toBeInTheDocument()
		expect(thirdButton).toBeInTheDocument()
	})

	it('Should show the player choice and that the House is choosing', () => {
		const firstButton = screen.getByAltText('rock Logo', { selector: 'button' })

		userEvent.click(firstButton)

		expect(firstButton).not.toBeInTheDocument()
	})
})

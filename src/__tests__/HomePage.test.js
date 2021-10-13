import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

import { HomePage } from '../screens/HomePage'

describe('Home Page tests', () => {
	const history = createMemoryHistory()

	beforeEach(() => {
		render(
			<Router history={history}>
				<HomePage />
			</Router>
		)
	})

	it('Should render the home page correct', () => {
		const titleElement = screen.getByText('Rock Paper Scissors')
		const firstButton = screen.getByTestId('original')
		const secondButton = screen.getByTestId('bonus')

		expect(titleElement).toBeInTheDocument()
		expect(firstButton).toBeInTheDocument()
		expect(secondButton).toBeInTheDocument()
	})

	it('Should change to the original mode of the page when the user hits the button original', () => {
		const firstButton = screen.getByTestId('original')

		history.push = jest.fn()

		userEvent.click(firstButton)

		expect(history.push).toHaveBeenCalledWith('/original')
	})

	it('Should change to the bonus mode of the page when the user hits the button bonus', () => {
		const secondButton = screen.getByTestId('bonus')

		history.push = jest.fn()

		userEvent.click(secondButton)

		expect(history.push).toHaveBeenCalledWith('/bonus')
	})
})

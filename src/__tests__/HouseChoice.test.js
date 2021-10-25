import { HouseChoice } from '../utils/HouseChoice'

describe('House Choice method tests', () => {
	it('Should be able to return a random option between rock, paper or scissors', () => {
		const result = HouseChoice(0, 2, '/original').toLowerCase()
		const possibilities = ['rock', 'paper', 'scissors']

		expect(possibilities).toContain(result)
	})
	it('Should be able to return a random option between rock, paper, scissors, lizard or spock', () => {
		const result = HouseChoice(0, 4, '/bonus').toLowerCase()
		const possibilities = ['rock', 'paper', 'scissors', 'lizard', 'spock']

		expect(possibilities).toContain(result)
	})
})
